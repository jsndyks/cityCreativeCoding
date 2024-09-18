// -- Interactive opacity twice alternative

void setup() {
  size(800, 800);
}

void draw() {

  background(255);
  noStroke();

  // -- two alphas based on mouseX & mouseY
  int alphaRed  = 255* mouseX/width;  // <-- for Red
  int alphaBlu  = 255* mouseY/height; // <-- for Blue

  fill(255, 0, 0, alphaRed);  // <-- alpha based on mouseX
  rect(100, 100, 500, 500);
  fill(0, 0, 255, alphaBlu);  // <-- alpha based on mouseY
  rect(200, 200, 500, 500);
}
