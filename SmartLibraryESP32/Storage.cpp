#include "Globals.h"

void initLittleFS() {
  if (!LittleFS.begin(true)) {
    errorBeep();
    return;
  }
}

void initSDCard() {
  if (!SD.begin(SD_CS_PIN, spiSD)) {
    errorBeep();
    return;
  }

  uint8_t cardType = SD.cardType();
  if (cardType == CARD_NONE) {
    errorBeep();
    return;
  }

  if (!SD.exists("/covers")) {
    SD.mkdir("/covers");
  }
}

void loadStudents() {
  if (!LittleFS.exists("/students.json")) {
    return;
  }
  
  File file = LittleFS.open("/students.json", "r");
  DynamicJsonDocument doc(81920); 
  DeserializationError error = deserializeJson(doc, file);
  file.close();

  if (error) {
    errorBeep();
    return;
  }

  JsonArray arr = doc.as<JsonArray>();
  studentCount = 0;
  studentsInsideCount = 0;

  for (JsonObject repo : arr) {
    if (studentCount >= MAX_STUDENTS) break;
    
    students[studentCount].uid = repo["uid"] | "";
    students[studentCount].name = repo["name"] | "غير معروف";
    students[studentCount].nationalId = repo["nationalId"] | "";
    students[studentCount].gender = repo["gender"] | "غير محدد";
    students[studentCount].status = repo["status"] | "Outside";
    students[studentCount].entryTime = repo["entryTime"] | "";
    students[studentCount].exitTime = repo["exitTime"] | "";
    students[studentCount].lastSeen = repo["lastSeen"] | "";
    
    if (students[studentCount].status == "Inside" || students[studentCount].status == "Entry") {
      studentsInsideCount++;
    }
    
    studentCount++;
  }
}

void saveStudents() {
  DynamicJsonDocument doc(8192);
  JsonArray arr = doc.to<JsonArray>();

  for (int i = 0; i < studentCount; i++) {
    JsonObject obj = arr.createNestedObject();
    obj["uid"] = students[i].uid;
    obj["name"] = students[i].name;
    obj["nationalId"] = students[i].nationalId;
    obj["gender"] = students[i].gender;
    obj["status"] = students[i].status;
    obj["entryTime"] = students[i].entryTime;
    obj["exitTime"] = students[i].exitTime;
    obj["lastSeen"] = students[i].lastSeen;
  }

  File file = LittleFS.open("/students.json", "w");
  if (!file || serializeJson(doc, file) == 0) {
    errorBeep();
  }
  file.close();
}

void loadBooks() {
  if (!LittleFS.exists("/books.json")) {
    return;
  }
  
  File file = LittleFS.open("/books.json", "r");
  DynamicJsonDocument doc(8192);
  DeserializationError error = deserializeJson(doc, file);
  file.close();

  if (error) {
    errorBeep();
    return;
  }

  JsonArray arr = doc.as<JsonArray>();
  bookCount = 0;

  for (JsonObject repo : arr) {
    if (bookCount >= MAX_BOOKS) break;
    
    books[bookCount].code = repo["code"] | "";
    books[bookCount].title = repo["title"] | "بدون عنوان";
    books[bookCount].author = repo["author"] | "غير معروف";
    books[bookCount].status = repo["status"] | "Available";
    books[bookCount].holderId = repo["holderId"] | "-";
    
    bookCount++;
  }
}

void saveBooks() {
  DynamicJsonDocument doc(8192);
  JsonArray arr = doc.to<JsonArray>();

  for (int i = 0; i < bookCount; i++) {
    JsonObject obj = arr.createNestedObject();
    obj["code"] = books[i].code;
    obj["title"] = books[i].title;
    obj["author"] = books[i].author;
    obj["status"] = books[i].status;
    obj["holderId"] = books[i].holderId;
  }

  File file = LittleFS.open("/books.json", "w");
  if (!file || serializeJson(doc, file) == 0) {
    errorBeep();
  }
  file.close();
}

void appendToLog(String uid, String name, String action) {
  File logFile = SD.open("/logs.csv", FILE_APPEND);
  if (logFile) {
    String logEntry = getRealTime() + "," + uid + "," + name + "," + action;
    logFile.println(logEntry);
    logFile.close();
  }
}