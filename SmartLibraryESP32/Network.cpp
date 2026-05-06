#include "Globals.h"

String getRealTime() {
  time_t now = time(nullptr);
  if (now < 100000) return "-";
  struct tm timeinfo;
  localtime_r(&now, &timeinfo);
  char buffer[30];
  strftime(buffer, sizeof(buffer), "%Y-%m-%d %H:%M:%S", &timeinfo);
  return String(buffer);
}

void broadcastStatusUpdate() {
  DynamicJsonDocument doc(256);
  doc["type"] = "status_update";
  
  JsonObject payload = doc.createNestedObject("payload");
  payload["freeHeap"] = ESP.getFreeHeap();
  payload["uptimeSeconds"] = (millis() - uptimeStartTime) / 1000;
  payload["studentsInside"] = studentsInsideCount;
  payload["booksTotal"] = bookCount;
  payload["peopleCount"] = peopleCount; 
  payload["crowdLevel"] = (peopleCount == 0) ? "Empty" : (peopleCount <= 12) ? "Moderate" : "Crowded";
  payload["serverState"] = "Active";

  String response;
  serializeJson(doc, response);
  ws.textAll(response);
}

void notifyNewRfidScan(String scannedUid) {
  StaticJsonDocument<128> doc;
  doc["type"] = "rfid_scan";
  doc["uid"] = scannedUid;
  
  String response;
  serializeJson(doc, response);
  ws.textAll(response); 
}

String processStudentAction(String uid, String action) {
  int foundIndex = -1;
  for (int i = 0; i < studentCount; i++) {
    if (students[i].uid == uid) {
      foundIndex = i;
      break;
    }
  }

  if (foundIndex == -1) {
    errorBeep(); 
    return "خطأ: الطالب غير مسجل في النظام";
  }

  String newStatus = "";
  if (action == "toggle") {
    newStatus = (students[foundIndex].status == "Inside") ? "Outside" : "Inside";
  } else if (action == "entry") {
    newStatus = "Inside";
  } else if (action == "exit") {
    newStatus = "Outside";
  }

  students[foundIndex].status = newStatus;

  if (newStatus == "Inside") {
    students[foundIndex].entryTime = getRealTime(); 
  } else {
    students[foundIndex].exitTime = getRealTime();  
  }
  
  studentsInsideCount = 0;
  for (int i = 0; i < studentCount; i++) {
    if (students[i].status == "Inside") studentsInsideCount++;
  }

  appendToLog(students[foundIndex].uid, students[foundIndex].name, newStatus);
  saveStudents();
  successBeep(); 
  broadcastStatusUpdate(); 
  return "تم تسجيل حركة الطالب بنجاح";
}

String processBookAction(String code, String title, String author, String action, String holderId) {
  int foundIndex = -1;
  for (int i = 0; i < bookCount; i++) {
    if (books[i].code == code) {
      foundIndex = i;
      break;
    }
  }

  if (action == "add") {
    if (foundIndex != -1) return "خطأ: هذا الكود موجود مسبقاً";
    if (bookCount >= MAX_BOOKS) return "خطأ: ذاكرة الكتب ممتلئة";
    
    books[bookCount].code = code;
    books[bookCount].title = title;
    books[bookCount].author = author;
    books[bookCount].status = "Available";
    books[bookCount].holderId = "-";
    bookCount++;
    saveBooks();
    broadcastStatusUpdate();
    return "تمت إضافة الكتاب بنجاح";
  }
  
  if (action == "update") {
    if (foundIndex == -1) return "خطأ: الكتاب غير موجود";
    if (title != "") books[foundIndex].title = title;
    if (author != "") books[foundIndex].author = author;
    saveBooks();
    return "تم تحديث بيانات الكتاب بنجاح";
  }

  if (action == "delete") {
    if (foundIndex == -1) return "خطأ: الكتاب غير موجود";
    
    for (int i = foundIndex; i < bookCount - 1; i++) {
      books[i] = books[i + 1];
    }
    bookCount--;
    saveBooks();
    
    String coverPath = "/covers/" + code + ".jpg";
    if (SD.exists(coverPath)) {
      SD.remove(coverPath);
    }
    broadcastStatusUpdate();
    return "تم حذف الكتاب وصورته بنجاح";
  }

  if (action == "borrow") {
    if (foundIndex == -1) return "خطأ: الكتاب غير موجود";
    if (books[foundIndex].status == "Borrowed") return "خطأ: الكتاب مستعار بالفعل";
    
    books[foundIndex].status = "Borrowed";
    books[foundIndex].holderId = holderId;
    saveBooks();
    return "تمت الاستعارة بنجاح";
  }

  if (action == "return") {
    if (foundIndex == -1) return "خطأ: الكتاب غير موجود";
    
    books[foundIndex].status = "Available";
    books[foundIndex].holderId = "-";
    saveBooks();
    return "تم إرجاع الكتاب بنجاح";
  }

  return "خطأ: إجراء غير معروف";
}

void setupRoutes() {
  server.serveStatic("/", LittleFS, "/").setDefaultFile("index.html").setCacheControl("max-age=31536000");
  server.serveStatic("/covers/", SD, "/covers/").setCacheControl("max-age=31536000");

  server.on("/status", HTTP_GET, [](AsyncWebServerRequest *request){
    DynamicJsonDocument doc(512);
    doc["freeHeap"] = ESP.getFreeHeap();
    doc["uptimeSeconds"] = (millis() - uptimeStartTime) / 1000;
    doc["studentsInside"] = studentsInsideCount; 
    doc["peopleCount"] = peopleCount;          
    doc["booksTotal"] = bookCount;
    doc["crowdLevel"] = (peopleCount == 0) ? "Empty" : (peopleCount <= 12) ? "Moderate" : "Crowded";
    doc["serverState"] = "Active";
    
    String response;
    serializeJson(doc, response);
    request->send(200, "application/json", response);
  });

  server.on("/students", HTTP_GET, [](AsyncWebServerRequest *request){
    if(!LittleFS.exists("/students.json")){
      request->send(200, "application/json", "[]");
    } else {
      request->send(LittleFS, "/students.json", "application/json");
    }
  });

  server.on("/books", HTTP_GET, [](AsyncWebServerRequest *request){
    if(!LittleFS.exists("/books.json")){
      request->send(200, "application/json", "[]");
    } else {
      request->send(LittleFS, "/books.json", "application/json");
    }
  });

  server.on("/barcode", HTTP_POST, [](AsyncWebServerRequest *request){}, NULL,
    [](AsyncWebServerRequest *request, uint8_t *data, size_t len, size_t index, size_t total){
      if(!request->hasHeader("Authorization") || request->getHeader("Authorization")->value() != activeToken) {
          request->send(401, "application/json", "{\"message\":\"Unauthorized\"}");
          return;
      }
      DynamicJsonDocument doc(1024);
      deserializeJson(doc, data, len);
      
      String code = doc["code"] | "";
      String title = doc["title"] | "";
      String author = doc["author"] | "";
      String action = doc["action"] | "";
      String holderId = doc["holderId"] | "-";

      String resultMsg = processBookAction(code, title, author, action, holderId);
      request->send(200, "application/json", "{\"message\":\"" + resultMsg + "\"}");
  });

  server.on("/api/login", HTTP_POST, [](AsyncWebServerRequest *request){}, NULL,
    [](AsyncWebServerRequest *request, uint8_t *data, size_t len, size_t index, size_t total){
      DynamicJsonDocument doc(256);
      deserializeJson(doc, data, len);
      String user = doc["username"] | "";
      String pass = doc["password"] | "";

      if(user == "admin" && pass == "library123") {
          activeToken = "TOKEN_" + String(millis());
          request->send(200, "application/json", "{\"status\":\"success\", \"token\":\"" + activeToken + "\"}");
      } else {
          request->send(401, "application/json", "{\"status\":\"error\"}");
      }
  });

  server.on("/students/add", HTTP_POST, [](AsyncWebServerRequest *request){}, NULL,
    [](AsyncWebServerRequest *request, uint8_t *data, size_t len, size_t index, size_t total){
      if(!request->hasHeader("Authorization") || request->getHeader("Authorization")->value() != activeToken) {
          request->send(401, "application/json", "{\"message\":\"Unauthorized\"}");
          return;
      }
      DynamicJsonDocument doc(512);
      DeserializationError error = deserializeJson(doc, data, len);          
      if (error) {
        request->send(400, "application/json", "{\"message\":\"خطأ في صيغة البيانات\"}");
        return;
      }
      
      String uid = doc["uid"] | "";
      String name = doc["name"] | "";
      String nationalId = doc["nationalId"] | "";
      String gender = doc["gender"] | "غير محدد"; 
      String lastSeen = doc["lastSeen"] | "-";

      int foundIndex = -1;
      for (int i = 0; i < studentCount; i++) {
        if (students[i].uid == uid) { foundIndex = i; break; }
      }

      if (foundIndex != -1) {
        students[foundIndex].name = name;
        students[foundIndex].nationalId = nationalId;
        students[foundIndex].gender = gender;
        saveStudents();
        request->send(200, "application/json", "{\"message\":\"تم تحديث بيانات الطالب\"}");
      } else {
        if(studentCount < MAX_STUDENTS) {
          students[studentCount].uid = uid;
          students[studentCount].name = name;
          students[studentCount].nationalId = nationalId;
          students[studentCount].gender = gender;
          students[studentCount].status = "Outside"; 
          students[studentCount].lastSeen = lastSeen;
          studentCount++;
          saveStudents();
          request->send(200, "application/json", "{\"message\":\"تم حفظ الطالب بنجاح\"}");
        } else {
          request->send(507, "application/json", "{\"message\":\"الذاكرة ممتلئة! الحد الأقصى 100 طالب\"}");
        }
      }
  });

  server.on("/students/update", HTTP_POST, [](AsyncWebServerRequest *request){}, NULL,
    [](AsyncWebServerRequest *request, uint8_t *data, size_t len, size_t index, size_t total){
      if(!request->hasHeader("Authorization") || request->getHeader("Authorization")->value() != activeToken) {
          request->send(401, "application/json", "{\"message\":\"Unauthorized\"}");
          return;
      }
      DynamicJsonDocument doc(512);
      deserializeJson(doc, data, len);
      String uid = doc["uid"] | "";
      
      int foundIndex = -1;
      for (int i = 0; i < studentCount; i++) {
        if (students[i].uid == uid) { foundIndex = i; break; }
      }

      if (foundIndex != -1) {
        students[foundIndex].name = doc["name"] | students[foundIndex].name;
        students[foundIndex].nationalId = doc["nationalId"] | students[foundIndex].nationalId;
        students[foundIndex].gender = doc["gender"] | students[foundIndex].gender;
        saveStudents();
        request->send(200, "application/json", "{\"message\":\"تم التحديث\"}");
      } else {
        request->send(404, "application/json", "{\"message\":\"الطالب غير موجود\"}");
      }
  });

  server.on("/students/delete", HTTP_DELETE, [](AsyncWebServerRequest *request){}, NULL,
    [](AsyncWebServerRequest *request, uint8_t *data, size_t len, size_t index, size_t total){
      if(!request->hasHeader("Authorization") || request->getHeader("Authorization")->value() != activeToken) {
          request->send(401, "application/json", "{\"message\":\"Unauthorized\"}");
          return;
      }
      DynamicJsonDocument doc(256);
      deserializeJson(doc, data, len);
      String uid = doc["uid"] | "";

      int foundIndex = -1;
      for (int i = 0; i < studentCount; i++) {
        if (students[i].uid == uid) { foundIndex = i; break; }
      }

      if (foundIndex != -1) {
        for (int i = foundIndex; i < studentCount - 1; i++) {
          students[i] = students[i + 1];
        }
        studentCount--;
        saveStudents();
        
        studentsInsideCount = 0;
        for (int i = 0; i < studentCount; i++) {
          if (students[i].status == "Inside") studentsInsideCount++;
        }
        broadcastStatusUpdate();
        
        request->send(200, "application/json", "{\"message\":\"تم حذف الطالب بنجاح\"}");
      } else {
        request->send(404, "application/json", "{\"message\":\"الطالب غير موجود أساساً\"}");
      }
  });

  server.on("/upload-cover", HTTP_POST, [](AsyncWebServerRequest *request){}, NULL,
    [](AsyncWebServerRequest *request, uint8_t *data, size_t len, size_t index, size_t total){
      if(index == 0) currentUploadBuffer = "";
      for(size_t i = 0; i < len; i++){
        currentUploadBuffer += (char)data[i];
      }
      
      if(index + len == total){
        DynamicJsonDocument doc(2048); 
        deserializeJson(doc, currentUploadBuffer);
        
        String code = doc["code"].as<String>();
        String base64Image = doc["image"].as<String>();
      
        int commaIndex = base64Image.indexOf(',');
        if(commaIndex != -1) {
          base64Image = base64Image.substring(commaIndex + 1);
        }
        
        size_t outputLength;
        unsigned char * decodedImage = new unsigned char[base64Image.length()];
        
        mbedtls_base64_decode(decodedImage, base64Image.length(), &outputLength, (const unsigned char*)base64Image.c_str(), base64Image.length());
        
        String filePath = "/covers/" + code + ".jpg";
        File file = SD.open(filePath, FILE_WRITE);
        
        if(file){
          file.write(decodedImage, outputLength);
          file.close();
          request->send(200, "application/json", "{\"message\":\"تم حفظ الصورة بنجاح\"}");
        } else {
          request->send(500, "application/json", "{\"message\":\"فشل الحفظ في SD\"}");
        }
        
        delete[] decodedImage;
        currentUploadBuffer = ""; 
      }
  });

  server.on("/logs", HTTP_GET, [](AsyncWebServerRequest *request) {
    if (SD.exists("/logs.csv")) {
      request->send(SD, "/logs.csv", "text/csv");
    } else {
      request->send(200, "text/plain", "No logs available");
    }
  });

  server.on("/rfid", HTTP_POST, [](AsyncWebServerRequest *request){}, NULL,
    [](AsyncWebServerRequest *request, uint8_t *data, size_t len, size_t index, size_t total){
      if(!request->hasHeader("Authorization") || request->getHeader("Authorization")->value() != activeToken) {
          request->send(401, "application/json", "{\"message\":\"Unauthorized\"}");
          return;
      }
      DynamicJsonDocument doc(256);
      DeserializationError error = deserializeJson(doc, data, len); 
      if (error) {
        request->send(400, "application/json", "{\"message\":\"Invalid JSON\"}");
        return;
      }

      String uid = doc["id"] | "";
      String action = doc["action"] | "toggle";

      String resultMsg = processStudentAction(uid, action);
      request->send(200, "application/json", "{\"message\":\"" + resultMsg + "\"}");
  });

  server.on("/scan-rfid", HTTP_POST, [](AsyncWebServerRequest *request){}, NULL,
    [](AsyncWebServerRequest *request, uint8_t *data, size_t len, size_t index, size_t total){
      if(!request->hasHeader("Authorization") || request->getHeader("Authorization")->value() != activeToken) {
          request->send(401, "application/json", "{\"message\":\"Unauthorized\"}");
          return;
      }

      DynamicJsonDocument doc(1024); 
      
      if (lastScannedUid == "") {
        doc["exists"] = false;
        doc["student"]["uid"] = "Unknown";
      } else {
        bool exists = false;
        JsonObject studentObj = doc.createNestedObject("student");
        
        for(int i = 0; i < studentCount; i++) {
          if(students[i].uid == lastScannedUid) {
            exists = true;
            studentObj["uid"] = students[i].uid;
            studentObj["name"] = students[i].name;
            studentObj["nationalId"] = students[i].nationalId;
            studentObj["gender"] = students[i].gender;
            studentObj["lastSeen"] = students[i].lastSeen;
            break;
          }
        }
        
        if (!exists) {
          studentObj["uid"] = lastScannedUid;
          studentObj["name"] = "Unknown Student";
        }
        
        doc["exists"] = exists;
      }

      String response;
      serializeJson(doc, response);
      request->send(200, "application/json", response);

      lastScannedUid = "";
  });

  server.onNotFound([](AsyncWebServerRequest *request) {
    request->redirect("/"); 
  });
}