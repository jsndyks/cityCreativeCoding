// -- Interactive variation

void setup() {
  size(800, 800);
}

void draw() {

  background(255);
  noStroke();

  // -- change k based on mouseX
  int k = 255* mouseX/width; // -- what does k give us?
  
  fill(255, 0, 0);
  rect(100, 100, 500, 500);
  fill(0, 0, k);             // <-- k is blue component
  rect(200, 200, 500, 500);
}
