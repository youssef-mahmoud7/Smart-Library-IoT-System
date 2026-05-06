#include "Globals.h"

// إعدادات الشبكة
const char* ssid = "Smart-Library";
const char* password = "12345678";
const char* router_ssid = "Any Real Internet";
const char* router_password = "Your Password";
const char* ntpServer = "pool.ntp.org";
const long  gmtOffset_sec = 2 * 3600;      
const int   daylightOffset_sec = 3600;
const byte DNS_PORT = 53;

// تعريف الكائنات (Objects)
AsyncWebServer server(80);
AsyncWebSocket ws("/ws");
DNSServer dnsServer; 
MFRC522 mfrc522(RFID_SS_PIN, RFID_RST_PIN);
SPIClass spiSD(HSPI);

// تعريف قواعد البيانات في الـ RAM
Student students[MAX_STUDENTS];
int studentCount = 0;

Book books[MAX_BOOKS];
int bookCount = 0;

int studentsInsideCount = 0; 
int peopleCount = 0;         

String currentUploadBuffer = ""; 
String activeToken = "";
String lastScannedUid = "";
unsigned long uptimeStartTime = 0;

void setup() {
  Serial.begin(115200);
  Serial.println("\n\n--- بدء تشغيل نظام المكتبة الذكية ---");
  uptimeStartTime = millis();

  // 1. تهيئة المكونات المادية والذواكر (من الملفات الأخرى)
  initHardware(); 
  initLittleFS();
  initSDCard();

  // 2. جلب قواعد البيانات
  loadStudents();
  loadBooks();

  // 3. تشغيل شبكة الـ Wi-Fi
  WiFi.mode(WIFI_AP_STA); 
  
  WiFi.begin(router_ssid, router_password);
  Serial.print("جاري الاتصال بالإنترنت لجلب الوقت...");
  
  int attempts = 0;
  while (WiFi.status() != WL_CONNECTED && attempts < 20) { 
    delay(500);
    Serial.print(".");
    attempts++;
  }
  
  if (WiFi.status() == WL_CONNECTED) {
    Serial.println("\nتم الاتصال بالإنترنت بنجاح! جاري مزامنة الوقت...");
    configTime(gmtOffset_sec, daylightOffset_sec, ntpServer);
  } else {
    Serial.println("\nفشل الاتصال بالإنترنت. النظام سيعمل لكن الوقت سيظهر كعلامة (-).");
  }

  WiFi.softAP(ssid, password, 1, 0, 10);
  Serial.print("تم تشغيل شبكة المكتبة! اتصل بـ Wi-Fi: ");
  Serial.println(ssid);
  Serial.print("IP لوحة التحكم: ");
  Serial.println(WiFi.softAPIP());
  
  dnsServer.start(DNS_PORT, "*", WiFi.softAPIP());
  
  // 4. إعداد الـ WebSockets والمسارات
  ws.onEvent([](AsyncWebSocket *server, AsyncWebSocketClient *client, AwsEventType type, void *arg, uint8_t *data, size_t len){
    if (type == WS_EVT_CONNECT) {
      Serial.printf("متصل جديد بـ WebSocket. ID: %u\n", client->id());
    } else if (type == WS_EVT_DISCONNECT) {
      Serial.printf("انقطع الاتصال بـ WebSocket. ID: %u\n", client->id());
    }
  });
  
  server.addHandler(&ws);
  setupRoutes();

  // 5. إطلاق الخادم
  server.begin();
  Serial.println("الخادم يعمل الآن ومستعد لاستقبال الطلبات...");
  successBeep(); 
}

void loop() {
  ws.cleanupClients();
  handlePIRLogic();
  dnsServer.processNextRequest(); 
  
  static unsigned long lastRfidReadTime = 0;
  
  if (millis() - lastRfidReadTime > 1000) {
    if (mfrc522.PICC_IsNewCardPresent() && mfrc522.PICC_ReadCardSerial()) {
      beep(50);
      
      String scannedUid = "";
      for (byte i = 0; i < mfrc522.uid.size; i++) {
        scannedUid += String(mfrc522.uid.uidByte[i] < 0x10 ? "0" : "");
        scannedUid += String(mfrc522.uid.uidByte[i], HEX);
      }
      scannedUid.toUpperCase();
      
      Serial.println("تم التقاط بطاقة جديدة! UID: " + scannedUid);
      notifyNewRfidScan(scannedUid);

      lastScannedUid = scannedUid; 
      
      String result = processStudentAction(scannedUid, "toggle");
      Serial.println(result);
      
      mfrc522.PICC_HaltA();
      lastRfidReadTime = millis();
    }
  }
}