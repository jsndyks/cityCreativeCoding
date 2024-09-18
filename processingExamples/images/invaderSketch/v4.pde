// -- Add text 
PImage invader1, invader2;
int x = 0;
int row = 0;
int iSize = 100;
int framesPerChange = 20;

void setup() {
  size(900, 600);
  fill(32);
  textSize(18);

  invader1 = loadImage("invader11.up.png");
  invader2 = loadImage("invader11.down.png");
}

void draw() {
  background(255);

  text("frameCount: "+frameCount, 10, 120);

  // -- change the position of the image :
  row = frameCount/width;
  text("row: "+row, 10, 150);

  if (row%2 == 0) {
    x = frameCount%width;
  } else {
    x = width-frameCount%width;
  }

  // -- change the image:
  int changes = frameCount/framesPerChange;
  text("changes: "+changes, 10, 180);

  int ischangesOdd = changes%2;    
  text("ischangesOdd: "+ischangesOdd, 10, 210);

  if (ischangesOdd == 0) {
    image(invader1, x, row*iSize, iSize, iSize);
  } else {
    image(invader2, x, row*iSize, iSize, iSize);
  }
}
