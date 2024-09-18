int    lineWidth;
color  lineColour;
PImage myPic;

// https://processing.org/reference/PImage.html

void setup () {

  size(416, 900);

  lineWidth = 5;
  lineColour = color(255, 128);
  myPic = loadImage("https://jsndyks.github.io/cityBootCamp/images/lcfc.jpg");

  image(myPic, 0, 0);

  strokeWeight(lineWidth);  // <-- set line properties
  stroke(lineColour);
}

void draw () {

  if (mousePressed) {   // <-- if mouse is pressed ...
    line(pmouseX, pmouseY, mouseX, mouseY);  // <-- draw line
  }
}
