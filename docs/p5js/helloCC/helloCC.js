function setup() {
  createCanvas(400,300);
 
  textAlign(CENTER,CENTER);
  textSize(32);
  fill(120);
  stroke(200);
}
 
function draw() {
  background(255);
  text("Hello Creative Coders",mouseX,mouseY+40);
  circle(mouseX,mouseY,35);
}
