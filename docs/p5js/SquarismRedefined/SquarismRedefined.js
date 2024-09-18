var img;
var s = 25;

function preload(){
  img = loadImage("data/face.png");
}

function setup() {
  createCanvas(307, 342);
  
  rectMode(CENTER);
  background(127);
}

function draw() {
  var c = img.get(mouseX, mouseY);
  fill(c);
  triangle(mouseX, mouseY, mouseX-(s/2), mouseY-s, mouseX+(s/2), mouseY-s);
  
}
