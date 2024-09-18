

function setup() {
  createCanvas(320, 240);
}

function draw() {
  for (int y = 0; y < height; y=y+1) {
    for (int x = 0; x < width; x=x+1) {
      var r = 255 * (x / parseFloat(width));
      var g = 255 * (y / parseFloat(height));
      var b = 127.5 + 127.5 * sin(millis() / 1000.0);
      set(x, y, color(r, g, b));
      updatePixels()
    }
  }
}
