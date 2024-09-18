PImage img;
int s = 5;

void setup() {
  size(640, 480);
  img = loadImage("Holiday.png");
  rectMode(CENTER);
  background(127);
}

void draw() {                           // -- Get the colour of the PImage
  int rx = int(random(-25,25));       // -- integer from -25 to 25 : x offset
  int ry = int(random(-25,25));       // -- integer from -25 to 25 : y offset
  color c = img.get(mouseX, mouseY);  // -- called 'img' at cell mouseX,mouseY.
  fill(c,64);                           // -- Set fill to this semi-opaque colour.
  rect(mouseX, mouseY, s, s);         // -- Then draw a rectangle at
}                                       // -- the mouse position.
