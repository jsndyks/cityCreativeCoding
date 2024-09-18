// -- set up the things that don't change ...

function setup() {
  createCanvas(400, 400);
  background(220);
  textSize(18);
  fill(64);
}

function draw() {}

function keyPressed() {
    text(key,random(20,width-20),random(20,height-20));
}
