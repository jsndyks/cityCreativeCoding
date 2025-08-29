function setup() {
 createCanvas(400,300);
}
 
function draw() {
  background(247,239,218);
  strokeWeight(0.5);
  noFill();
  const maxHeight = 100;
 
  beginShape();
  for (let xPos = 0; xPos<width; xPos++)
  {
    const scale = 0.001*mouseX;       // Scale distance by mouse position.
    const yPos = 0.5*height + (2*noise(scale*xPos)-1)*maxHeight;
    vertex(xPos,yPos);
  }
  endShape();
}
