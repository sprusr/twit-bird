int red = 2;
int green = 4;
int blue = 7;
int level = 0;

void setup() {
  pinMode(red, OUTPUT);
  pinMode(green, OUTPUT);
  pinMode(blue, OUTPUT);

  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }
  
}

void loop() {
  if (Serial.available()) {
    Serial.read();
    level = 255;
  }
  
  while(level > 0) {
    level--;
    analogWrite(blue, level);
    delay(3);
  }
}
