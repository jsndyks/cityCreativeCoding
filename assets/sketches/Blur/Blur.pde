PImage img;
 
void setup() {
  size(640, 480);
  img = loadImage("Holiday.png");
}
 
void draw() {
  image(img, 0, 0);
  filter(BLUR, mouseX / 100);
}
