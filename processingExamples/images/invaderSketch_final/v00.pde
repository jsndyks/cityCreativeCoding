// -- Draw and Image
PImage invader1, invader2;
int iSize = 400;

void setup() {
  size(900, 600);

  invader1 = loadImage("invader11.up.png");
  invader2 = loadImage("invader11.down.png");
}

void draw() {
  background(255);

    image(invader1,   0, 0, iSize, iSize);
    image(invader2, 500, 0, iSize, iSize);
}
