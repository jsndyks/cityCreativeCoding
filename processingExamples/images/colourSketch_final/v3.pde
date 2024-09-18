// -- Interactive opacity twice

void setup() {
  size(800, 800);
}

void draw() {

  background(255);
  noStroke();

  // -- change alpha based on mouseX
  int alpha = 255* mouseX/width;

  fill(255, 0, 0, 255-alpha); // <-- 255-alpha is opacity
  rect(100, 100, 500, 500);
  fill(0, 0, 255, alpha);
  rect(200, 200, 500, 500);
}
