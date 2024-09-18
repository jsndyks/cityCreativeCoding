PImage img;
int s = 25;
 
void setup() {
  size(640, 480);
  img = loadImage("Holiday.png");
  rectMode(CENTER);
  background(127);
}
 
void draw() {
  color c = img.get(mouseX, mouseY);
  fill(c);
  rect(mouseX, mouseY, s, s);
}
