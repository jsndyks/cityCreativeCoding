
let xPos;
 
function setup() {
  createCanvas(600,200);
  fill(0);
  textSize(48);
 
  xPos = width;
}
 
function draw() {
  background(255);
  const message = "Hello again Creative Coders...";
  text(message,xPos,height/2);
 
  xPos = xPos - 1;
}
