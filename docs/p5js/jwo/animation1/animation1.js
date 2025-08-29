function setup() {
  createCanvas(400, 300);
  frameRate(4);

  // Draw red rectangle with rounded edges.
  noStroke();
  fill(203, 118, 122);
}


function draw() {

  background(255, 236, 149);

  // Set position to some random value
  const xPosition = random(10, width-100);
  const yPosition = random(10, height-60);


  rect(xPosition, yPosition, 90, 50, 20);
}
