var img;

function preload(){
  img = loadImage("data/Holiday.png");
}

function setup() {
  createCanvas(640, 480);
  image(img, 0, 0);
  
}

function draw() {
  image(img, 0, 0);
  filter(BLUR, mouseX / 100);
}
