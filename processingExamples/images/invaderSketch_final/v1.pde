// -- Change the Image as the sketch progresses
PImage invader1, invader2;
int iSize = 400;
int framesPerChange = 20;  // <-- new variable

void setup() {
  size(900, 600);

  invader1 = loadImage("invader11.up.png");
  invader2 = loadImage("invader11.down.png");
}

void draw() {
  background(255);

  // -- change the image:
  int changes = frameCount/framesPerChange; // <-- new dependency
  int ischangesOdd = changes%2;    

  if (ischangesOdd == 0) {
    image(invader1, 0, 0, iSize, iSize);
  } else {
    image(invader2, 0, 0, iSize, iSize);
  }
  
  //if (mousePressed) {
  // framesPerChange = max(40*(width-mouseX)/width,3);  // <-- rate based on mouseX
  // println(framesPerChange);
  //}
}
