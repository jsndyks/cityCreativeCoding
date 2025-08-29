let kick, snare, hiHat;

function preload() {
  img = loadImage("drumkit.png");
  kick = loadSound("samples/kickDrum.wav");
  snare = loadSound("samples/snareDrum.wav");
  hiHat = loadSound("samples/hihat.wav");
}

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(255);
  image(img, 0, 0, width, height);
  noStroke();
  fill(0);

  textSize(12);
  text("Space bar", 110, 235);
  text("Press H", 155, 20);
  text("Press S", 40, 110);

  noLoop();
}

function keyPressed() {
  if (key === " ") {
    kick.stop();
    kick.play();
  } else if (key === "s") {
    snare.stop();
    snare.play();
  } else if (key === "h") {
    hiHat.stop();
    hiHat.play();
  }
}
