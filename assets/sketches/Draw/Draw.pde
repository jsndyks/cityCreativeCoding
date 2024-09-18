PImage img;
 
void setup() {
  size(307, 342);
  img = loadImage("data/face.png");
  image(img, 0, 0);
  noStroke();
  fill(0);
}
 
void draw() {
}
 
void mouseDragged() {
  ellipse(mouseX, mouseY, 5, 5);
}
