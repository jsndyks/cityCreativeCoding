
let rows = 9.0;
let cols = 11.0;

function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(250);

  let wi = width/cols;
  let hi = height/rows;

  for (let col=0; col<cols; col++) {
    for (let row=0; row<rows; row++) {
      let x = col*wi + random(-2.5,2.5);
      let y = row*hi + random(-2.5,2.5);
      let rWi = wi * random(0.9,1);
      let rHi = hi * random(0.9,1);

      if (mouseX > x && mouseX <x+wi && mouseY > y && mouseY <y+hi ) {
        fill(255, 128, 32);
      } else {
        fill(200);
      }

      rect(x, y, rWi, rHi);
    }
  }
}
