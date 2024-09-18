// -- Change the Image as the sketch progresses
PImage invader1, invader2;
int x = 0;
int row = 0;
int iSize = 400;
int framesPerChange = 20;  // -- New variable

void setup() {
  size(900, 600);

  invader1 = loadImage("invader11.up.png");
  invader2 = loadImage("invader11.down.png");
}

void draw() {
  background(255);

  // -- change the image:
  int changes = frameCount/framesPerChange;
  int ischangesOdd = changes%2;    

  if (ischangesOdd == 0) {
    image(invader1, x, row*iSize, iSize, iSize);
  } else {
    image(invader2, x, row*iSize, iSize, iSize);
  }
  
  //if (mousePressed) {
  // framesPerChange = 40*(width-mouseX)/width;
  // println(framesPerChange);
  //}
}
