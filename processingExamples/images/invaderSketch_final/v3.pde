// -- Change row
PImage invader1, invader2;
int x = 0;
int row = 0;                  // <-- vertical position
int iSize = 200;
int framesPerChange = 20;

void setup() {
  size(900, 600);

  invader1 = loadImage("invader11.up.png");
  invader2 = loadImage("invader11.down.png");
}

void draw() {
  background(255);

  // -- change the position of the image :
  row = frameCount/width;

  if (row%2 == 0) {
    x = frameCount%width;  // <-- remainder
  } else {
    x = width-frameCount%width;
  }

  // -- change the image:
  int changes = frameCount/framesPerChange;
  int isChangesOdd = changes%2;    

  if (isChangesOdd == 0) {
    image(invader1, x, row*iSize, iSize, iSize);
  } else {
    image(invader2, x, row*iSize, iSize, iSize);
  }
}
