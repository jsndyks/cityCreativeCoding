function setup() {
  createCanvas(380, 400);
  frameRate(20);
}

function draw()
{
  background(255);
  noStroke();

  let isBlack = true;

  let circleSize = 340;
  while (circleSize > 12) {
    // Alternate between black and white.
    if (isBlack) {
      fill(0);
      isBlack = false;
    } else {
      fill(255);
      isBlack = true;
    }

    // Create small random offset for each circle.
    const xOffset = noise(circleSize*0.1+frameCount*0.005)*40;
    const yOffset = noise(circleSize*0.1+frameCount*0.005, 1)*40;

    ellipse(170+xOffset, height/2+yOffset, circleSize, circleSize);

    // Shrink size of circle a little
    circleSize -= 16;
  }
}
