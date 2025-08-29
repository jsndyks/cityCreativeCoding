let xPos;
let vx;
let message, msgLen;

function setup() {
  createCanvas(600, 100);
  fill(255, 177, 8);
  textSize(48);
  xPos = width;
  vx = -2;
  message = "The next station is Angel...";
  msgLen = textWidth(message);
}

function draw() {
  background(64);

  xPos = xPos + vx;
  if (xPos <= -msgLen) {
    xPos = width;
  }
  text(message, xPos, height / 2 + 20);
}
