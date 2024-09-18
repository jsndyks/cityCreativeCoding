// -- Interactive opacity twice with text

void setup() {
  size(800, 800);
}

void draw() {

  background(255);
  noStroke();

  // -- two alphas based on mouseX & mouseY
  int alphaRed  = 255* mouseX/width;
  int alphaBlu  = 255* mouseY/height;

  fill(255, 0, 0, alphaRed);
  rect(100, 100, 500, 500);
  fill(0, 0, 255, alphaBlu);
  rect(200, 200, 500, 500);

  // -- add text
  fill(32);
  textSize(32);
  text("alpha RED = "  + alphaRed, width*0.35, height-60);
  text("alpha BLUE = " + alphaBlu,  width*0.35, height-20);
}
