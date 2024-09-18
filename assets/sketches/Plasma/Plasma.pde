void setup() {
  //fullScreen();
  size(320, 240);
}
 
void draw() {
  for (int y = 0; y < height; y=y+1) {
    for (int x = 0; x < width; x=x+1) {
      float r = 255 * (x / (float) width);
      float g = 255 * (y / (float) height);
      float b = 127.5 + 127.5 * sin(millis() / 1000.0);
      set(x, y, color(r, g, b));
    }
  }
}
