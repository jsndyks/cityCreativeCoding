var img;
var s = 5;

function preload(){
  img = loadImage("data/Holiday.png");
}

function setup() {
  createCanvas(640, 480);
  noStroke();
  
  rectMode(CENTER);
  background(127);
}

function draw() {
  let rx = round(random(-25,25));       // -- integer from -25 to 25 : x offset
  let ry = round(random(-25,25));       // -- integer from -25 to 25 : y offset
  let c = img.get(mouseX+rx, mouseY+ry);  // -- called 'img' at cell mouseX,mouseY.
  fill(c);                           // -- Set fill to this colour.
  rect(mouseX+rx, mouseY+ry, s, s);         // -- Then draw a rectangle at
}                                       // -- the mouse position.
