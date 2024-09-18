// -- set up the things that don't change ...
void setup() {
  size(400, 400);
  background(220);
  textSize(128);
  textAlign(CENTER); // <- centers text!
}

void draw() {

  // -- clear the canvas:
  background(220);
  // -- show the value of the key variable:
  text(key,width/2,height/2);
}
