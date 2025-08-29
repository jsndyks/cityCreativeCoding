let ran;

function setup() {
  createCanvas(200, 200);
  fill(0);
  textSize(48);
  textAlign(CENTER);
  ran = random(6);
}

function draw() {
  background(230, 255, 230);

  let message;

  if (ran >= 0 && ran < 1) {
    message = "ONE";
  }

  if (ran >= 1 && ran < 2) {
    message = "TWO";
  }

  if (ran >= 2 && ran < 3) {
    message = "THREE";
  }

  if (ran >= 3 && ran < 4) {
    message = "FOUR";
  }

  if (ran >= 4 && ran < 5) {
    message = "FIVE";
  }

  if (ran >= 5 && ran < 6) {
    message = "SIX";
  }
  text(message, width / 2, height / 2);
}
