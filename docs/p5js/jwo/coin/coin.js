let randoranmNumber;

function setup() {
  createCanvas(200, 200);
  fill(0);
  textSize(48);
  textAlign(CENTER);
  randomNumber = random(2);
}

function draw() {
  background(230, 255, 230);

  let message;

  if (randomNumber < 1) {
    message = "TAILS";
  } else {
    message = "HEADS";
  }
  text(message, width / 2, height / 2);
}
