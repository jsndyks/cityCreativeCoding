let drawIt = true;
let txtSz=16;

let mouse = "🐁";
let turtle = "🐢";
let rabbit = "🐇";
let duck = "🦆";
let lobster = "🦞";
let crab = "🦀";
let badger = "🦡";
let squirrel = "🐿";
let hedgehog = "🦔";
let pig = "🐖";
let squid = "🦑";
let cat = "🐈‍⬛";
let kangaroo = "🦘";

let animal;
let click = true;

function setup () {
  createCanvas(200, 200);
  fill(32);
  textAlign(CENTER);
  animal=mouse;
}

function draw () {
  if (drawIt) {
    background(240);
    fill(32);
    textSize(txtSz);
    text(animal, mouseX, mouseY);
  }
  if (click) {
    fill(32,64);
    textSize(12);
    text("click in here first ...", width/2, height-10);
  }
  drawIt = false;
  noLoop();
}

function mouseMoved () {
  drawIt=true;
  loop();
}

function keyPressed() {
  if (key == 'q') animal = squid;
  if (key == 'p') animal = pig;
  if (key == 'h') animal = hedgehog;
  if (key == 'b') animal = badger;
  if (key == 's') animal = squirrel;
  if (key == 'c') animal = crab;
  if (key == 'l') animal = lobster;
  if (key == 'd') animal = duck;
  if (key == 'r') animal = rabbit;
  if (key == 't') animal = turtle;
  if (key == 'm') animal = mouse;
  if (key == 'f') animal = cat;
  if (key == 'k') animal = kangaroo;
drawIt=true;
  loop();
}

function mouseClicked () {
  if (mouseButton == LEFT) {
    txtSz = min(txtSz+2, 96);
  } else {
    txtSz = max(txtSz+2, 6);
  }
  click = false;
  drawIt=true;
  loop();
}
