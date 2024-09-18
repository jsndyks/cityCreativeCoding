PImage img;
boolean mouseDown = false;
 
void setup() {
  size(307, 342);
  img = loadImage("face.png");
  image(img, 0, 0);
  strokeWeight(5);
  stroke(0);
  
}
 
void draw() {
  if (mouseDown) {
    line(pmouseX, pmouseY, mouseX,mouseY);
  }
}

void keyPressed() {
  if (key == '1') {
    stroke(0);  
  }
  else if (key == '2') {
    stroke(0,120,0,30);
  }
  else if (key == '3') {
    stroke(200,0,200,200);
  }
}
 
void mousePressed() {
  mouseDown = true;
}

void mouseReleased() {
  mouseDown = false;  
}
