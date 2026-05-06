# ESP32 Smart Library System

A standalone library management system powered entirely by an ESP32. 

I built this project to create a fully local management system that doesn't rely on external cloud servers or databases. Everything from the REST APIs to the front-end web dashboard is hosted directly on the microcontroller using LittleFS and an SD card.

## What it does
- **RFID Authentication:** Scans student IDs using an MFRC522 reader to log them in and out.
- **Occupancy Tracking:** Uses two PIR sensors to detect the direction of movement (entry vs. exit), keeping a real-time count of people inside the library.
- **Local Web Dashboard:** A responsive web application (PWA) served directly from the ESP32. 
- **Real-time updates:** Uses WebSockets to update the web UI instantly when a card is scanned or motion is detected. No page polling or reloads needed.
- **Dual Storage Handling:** Uses the ESP32's internal LittleFS for the HTML/CSS/JS files, and an external MicroSD Card for heavier files like book cover images and CSV log files.

## The Hardware
Here is what I used for this build:
- ESP32 Development Board
- MFRC522 RFID Reader
- 2x HC-SR501 PIR Motion Sensors
- MicroSD Card Module
- Active Buzzer

### Wiring & Pinout
Managing the SPI buses was a bit tricky since both the RFID reader and the SD card require SPI communication. I solved this by splitting them between the ESP32's VSPI and HSPI buses to prevent data collisions.

* **RFID Reader (VSPI):** SDA to GPIO 5, SCK to GPIO 18, MOSI to GPIO 23, MISO to GPIO 19, RST to GPIO 4.
* **SD Card (HSPI):** CS to GPIO 15, SCK to GPIO 14, MOSI to GPIO 13, MISO to GPIO 12.
* **Sensors:** PIR1 (Entry) on GPIO 32, PIR2 (Exit) on GPIO 33.
* **Buzzer:** GPIO 26.

## How to run it locally

1. Clone this repository and open the `.ino` file in the Arduino IDE.
2. Make sure you have the ESP32 board manager installed, along with these libraries:
   - `ESPAsyncWebServer` & `AsyncTCP`
   - `ArduinoJson` (v6)
   - `MFRC522`
3. Use the **ESP32 LittleFS Data Upload** tool to upload the `data` folder to the board's internal flash memory.
4. Format a MicroSD card to FAT32, create a folder named `covers` in the root directory, and plug it into the module.
5. Compile and upload the sketch.
6. Connect to the "Smart-Library" Wi-Fi network that the ESP32 broadcasts. A Captive Portal should automatically redirect you to the dashboard.

## To-Do / Future Improvements
- [ ] Add an OLED display to show the current occupancy directly on the hardware.
- [ ] Implement an automatic database backup to the SD card.

## License
This project is open-sourced under the MIT License.