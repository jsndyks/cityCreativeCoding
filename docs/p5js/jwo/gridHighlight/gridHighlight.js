let activeRow, activeCol;

function setup() {
  createCanvas(400, 400);
  noStroke();
  activeRow = -1;
  activeCol = -1;
}

function draw() {
  background(255);

  activeRow = round(mouseY / 40);
  activeCol = round(mouseX / 40);

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col = col + 1) {
      if (row == activeRow || col == activeCol) {
        fill(50, 50, 180, 180);
      } else {
        fill(180, 50, 50, 120);
      }
      circle(20 + col * 40, 20 + row * 40, 30);
    }
  }
}
