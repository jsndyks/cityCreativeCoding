const w = 500;
const h = 400;
let xPos, yPos; // Ball position.
let vx, vy; // Ball velocity
const radius = 15; // Ball size
let inPlayMode; // Is ball in play?
const pegRadius = 10; // Peg size

// peg positions
const peg1X = 250;
const peg1Y = 200;
const peg2X = 70;
const peg2Y = h - 24;
const peg3X = w - 24;
const peg3Y = 70;

function setup() {
  createCanvas(w, h);
  background(255);
  textSize(48);

  xPos = w - radius;
  yPos = h - radius;
  inPlayMode = false;
}

function draw() {
  background(255);

  drawPeg(peg1X, peg1Y);
  drawPeg(peg2X, peg2Y);
  drawPeg(peg3X, peg3Y);

  if (inPlayMode) {
    moveBall();
    drawBall();
    bounceOffWalls();

    checkForPegCollision(peg1X, peg1Y);
    checkForPegCollision(peg2X, peg2Y);
    checkForPegCollision(peg3X, peg3Y);
  } else {
    drawBall();
    drawAimingLine();
  }
}

function drawAimingLine() {
  stroke(0);
  line(xPos, yPos, mouseX, mouseY);
}

function drawBall() {
  noStroke();
  fill(0, 0, 255);
  ellipse(xPos, yPos, 2 * radius, 2 * radius);
}

function drawPeg(x, y) {
  fill(255, 0, 0);
  stroke(0);
  ellipse(x, y, 2 * pegRadius, 2 * pegRadius);
}

function moveBall() {
  xPos = xPos + vx;
  yPos = yPos + vy;
}

function bounceOffWalls() {
  if (xPos - radius < 0 || xPos + radius > width) {
    vx = -vx;
  }

  if (yPos - radius < 0 || yPos + radius > height) {
    vy = -vy;
  }
}

function checkForPegCollision(x, y) {
  if (dist(xPos, yPos, x, y) < radius + pegRadius) {
    fill(0);
    textAlign(CENTER, CENTER);
    text("GAME OVER!", width / 2, height / 2);
    frameRate(0);
  }
}

function mousePressed() {
  if (!inPlayMode) {
    vx = (mouseX - xPos) / 50;
    vy = (mouseY - yPos) / 50;
    inPlayMode = true;
  }
}
