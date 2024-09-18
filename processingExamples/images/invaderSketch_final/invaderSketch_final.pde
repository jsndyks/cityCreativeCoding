// -- Change the Image with a CONDITION
PImage invader1, invader2;
int iSize = 400;

void setup() {
  size(900, 600);

  invader1 = loadImage("invader11.up.png");
  invader2 = loadImage("invader11.down.png");
}

void draw() {
  background(255);

  // -- change the image:
  int changes = 3;                // interactive : changes = 2*mouseX/width;
  int ischangesOdd = changes%2;   // interactive : x = mouseX;

  if (ischangesOdd == 0) {
    image(invader1, 0, 0, iSize, iSize);
  } else {
    image(invader2, 0, 0, iSize, iSize);
  } 
}
