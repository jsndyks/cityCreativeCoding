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

  strokeWeight(lineWidth);  
  stroke(lineColour);
}

void draw () {

  if (mousePressed) {
    if (mouseButton == RIGHT) {
      stroke( myPic.get(mouseX, mouseY) );
    } else {
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
  }
}

void keyPressed () {
  save("myPic.jpg");  // <-- save image
}







  // save("myPic-"+year()+month()+day()+"_"+hour()+minute()+"_"+millis()+".jpg");
