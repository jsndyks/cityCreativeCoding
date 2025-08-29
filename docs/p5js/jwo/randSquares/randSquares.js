function setup() {
  createCanvas(860, 200);
}

function draw() {
  background(255);
  noStroke();
  fill(0, 0, 200, 100); // Transparent blue

  let xPos = 40;
  let yPos = 50;
  const sSize = 90;

  for (let i = 0; i < 8; i = i + 1) {
    quad(
      xPos + random(-10, 10),
      yPos + random(-10, 10),
      xPos + sSize + random(-10, 10),
      yPos + random(-10, 10),
      xPos + sSize + random(-10, 10),
      yPos + sSize + random(-10, 10),
      xPos + random(-10, 10),
      yPos + sSize + random(-10, 10)
    );

    xPos = xPos + 100;
  }
}
