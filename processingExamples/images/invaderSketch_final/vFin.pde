// -- Vary speed
PImage invader1, invader2;
int progress = 0;             // <-- increase quicker than frameCount
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
  progress += (row+1);
  text("progress: "+progress, 10, 150);

  row = progress/(width-iSize);
  text("row: "+row, 10, 180);

  if (row%2 == 0) {
    x = progress%(width-iSize);
  } else {
    x = (width-iSize)-progress%(width-iSize);
  }

  // -- change the image:
  text("framesPerChange: "+framesPerChange, 10, 210);

  int changes = progress/framesPerChange;
  text("changes: "+changes, 10, 240);

  int isChangesOdd = changes%2;    
  text("isChangesOdd: "+isChangesOdd, 10, 270);

  if (isChangesOdd == 0) {
    image(invader1, x, row*iSize, iSize, iSize);
  } else {
    image(invader2, x, row*iSize, iSize, iSize);
  }

  if (row>4) youAreDead(); // <-- naughty omission of curly braces
}

void youAreDead() {
  fill(128);
  textAlign(RIGHT);
  text("OK, we landed - now what?\nDo we have to go to the practical class?",
   x-20, height-60);
  noLoop();
}
