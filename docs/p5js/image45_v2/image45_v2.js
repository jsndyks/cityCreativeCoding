let img;
let s = 5;

function preload() {
  img = loadImage("data/Holiday.png");
}

function setup() {
  createCanvas(640, 480);
  //img = loadImage("Holiday.png");
  rectMode(CENTER);
  background(127);
  noStroke();
}


function draw() {

  let rX = int(random(-25, 25));          // -- integer from -25 to 25 : x offset
  let rY = int(random(-25, 25));          // -- integer from -25 to 25 : y offset
  let mX = mouseX+rX;          // -- Add some randomness around mouse position.
  let mY = mouseY+rY;          // -- Add some randomness around mouse position.
  let c = img.get(mX, mY);    // -- called 'img' at cell mX, mY.
  fill(c);                                // -- Set fill to this colour.
  rect(mX, mY, s, s);     // -- Then draw a rectangle at random
}
