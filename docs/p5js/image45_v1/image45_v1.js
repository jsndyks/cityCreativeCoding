let img;
let s = 25;

function preload(){
  img = loadImage("data/Holiday.png");
}

function setup() {
  createCanvas(640, 480);
  stroke(64);
  rectMode(CENTER);
  background(127);
}

function draw() {
  let c = img.get(mouseX, mouseY);  // -- called 'img' at cell mouseX,mouseY.
  fill(c);                           // -- Set fill to this colour.
  rect(mouseX, mouseY, s, s);         // -- Then draw a rectangle at
}                                       // -- the mouse position.
