#pragma once

#include <Arduino.h>
#include <WiFi.h>
#include <AsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include <LittleFS.h>
#include <SD.h>
#include <SPI.h>
#include <ArduinoJson.h>
#include "mbedtls/base64.h"
#include <MFRC522.h> 
#include <DNSServer.h>
#include <time.h>

#define SD_MOSI 13
#define SD_MISO 12
#define SD_SCK  14
#define SD_CS_PIN 15

#define RFID_MOSI 23
#define RFID_MISO 19
#define RFID_SCK  18
#define RFID_SS_PIN 5   
#define RFID_RST_PIN 4  

#define PIR1_PIN 32
#define PIR2_PIN 33

#define BUZZER_PIN 26   

extern AsyncWebServer server;
extern AsyncWebSocket ws;
extern DNSServer dnsServer; 
extern MFRC522 mfrc522;
extern SPIClass spiSD;

struct Student {
  String uid;
  String name;
  String nationalId;
  String gender; 
  String status;     
  String entryTime;
  String exitTime;
  String lastSeen;
};

struct Book {
  String code;
  String title;
  String author;
  String status;     
  String holderId;
};

#define MAX_STUDENTS 100
#define MAX_BOOKS 100

extern Student students[];
extern int studentCount;
extern Book books[];
extern int bookCount;
extern int studentsInsideCount; 
extern int peopleCount;         
extern String currentUploadBuffer; 
extern String activeToken;
extern String lastScannedUid;
extern unsigned long uptimeStartTime;

void beep(int duration = 100);
void successBeep();
void errorBeep();
void initHardware();
void handlePIRLogic();
void initLittleFS();
void initSDCard();
void loadStudents();
void saveStudents();
void loadBooks();
void saveBooks();
String getRealTime();
void appendToLog(String uid, String name, String action);
void broadcastStatusUpdate();
void notifyNewRfidScan(String scannedUid);
String processStudentAction(String uid, String action);
String processBookAction(String code, String title, String author, String action, String holderId);
void setupRoutes();