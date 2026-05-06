#include "Globals.h"

bool pir1Triggered = false;
bool pir2Triggered = false;
unsigned long lastPirTriggerTime = 0;
const unsigned long PIR_TIMEOUT = 4000; 

void beep(int duration) {
  digitalWrite(BUZZER_PIN, HIGH);
  delay(duration); 
  digitalWrite(BUZZER_PIN, LOW);
}

void successBeep() {
  beep(80);
  delay(100);
  beep(150);
}

void errorBeep() {
  digitalWrite(BUZZER_PIN, HIGH);
  delay(500);
  digitalWrite(BUZZER_PIN, LOW);
}

void initHardware() {
  pinMode(BUZZER_PIN, OUTPUT);
  digitalWrite(BUZZER_PIN, LOW);
  
  pinMode(PIR1_PIN, INPUT);
  pinMode(PIR2_PIN, INPUT);
  
  SPI.begin(RFID_SCK, RFID_MISO, RFID_MOSI);  
  
  mfrc522.PCD_Init();
  mfrc522.PCD_SetAntennaGain(mfrc522.RxGain_max);
}

void handlePIRLogic() {
  bool pir1State = digitalRead(PIR1_PIN) == HIGH;
  bool pir2State = digitalRead(PIR2_PIN) == HIGH;
  unsigned long currentTime = millis();

  if ((pir1Triggered || pir2Triggered) && (currentTime - lastPirTriggerTime > PIR_TIMEOUT)) {
    pir1Triggered = false;
    pir2Triggered = false;
  }

  if (pir1State && !pir1Triggered && !pir2Triggered) {
    pir1Triggered = true;
    lastPirTriggerTime = currentTime;
  }
  else if (pir2State && pir1Triggered) {
    peopleCount++;
    pir1Triggered = false;
    broadcastStatusUpdate();
  }

  if (pir2State && !pir2Triggered && !pir1Triggered) {
    pir2Triggered = true;
    lastPirTriggerTime = currentTime;
  }
  else if (pir1State && pir2Triggered) {
    if (peopleCount > 0) peopleCount--;
    pir2Triggered = false;
    broadcastStatusUpdate();
  }
}