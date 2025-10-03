// -- Move the image
PImage invader1, invader2;
int x = 0;                    // <-- horizontal position
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
  x = frameCount;

  // -- change the image:
  int changes = frameCount/framesPerChange;
  int isChangesOdd = changes%2;    

  if (isChangesOdd == 0) {
    image(invader1, x, 0, iSize, iSize);
  } else {
    image(invader2, x, 0, iSize, iSize);
  }
}
