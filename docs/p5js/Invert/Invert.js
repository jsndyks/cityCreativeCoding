var img;

function preload(){
  img = loadImage("data/Holiday.png");
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  image(img, 0, 0);
  filter(INVERT);
}
