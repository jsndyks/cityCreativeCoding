PImage img;
 
void setup() {
  size(640, 480);
  img = loadImage("Holiday.png");
  image(img, 0, 0);
  filter(INVERT);
}
