let theImage,
  images,
  gridSize,
  cellSize,
  cellFill,
  cellHalf,
  iWi,
  iHi,
  useR,
  useG,
  useB,
  useV,
  use0,
  useSize,
  useBars,
  showText,
  showShowText,
  barR,
  barG,
  barB,
  showTextColour,
  helpMe,
  sqrt255,
  helpMessage;

function preload() {
  images = [
    loadImage("images/bootCampImages.rect.thin.png"),
    loadImage("images/santanderBike.jpg"),
    loadImage("images/raduJianu.florida.png"),
    loadImage("images/raduJianu.bw.png"),
    loadImage("images/giffordsCircus.jpg"),
    loadImage("images/oldTrafford.jpg"),
    loadImage("images/gordonGopherGoswell.jpg")
  ];
}

function setup() {
  createCanvas(600, 600);
  gridSize = 7;
  cellFill = 0.9;
  useR = false;
  useG = false;
  useB = false;
  useV = true;
  use0 = false;
  useSize = false;
  useBars = false;
  showText = false;
  showShowText = false;
  barR = true;
  barG = true;
  barB = true;
  helpMe = false;
  sqrt255 = sqrt(255);
  helpMessage = "";

  rectMode(CENTER);
  setImage(0);
  noStroke();
}

function draw() {
  background(255);

  cellSize = width / gridSize;
  cellHalf = cellSize / 2;

  drawImage(gridSize, gridSize);

  if (showText && showShowText && !helpMe) {
    showImageText(showTextColour);
  }

  if (helpMe) {
    showHelp();
  }

  showText = false;

  noLoop();
}

function setImage(imgIndex) {
  if (imgIndex >= 0 && imgIndex < images.length) {
    theImage = images[imgIndex];
    theImage.loadPixels();
    iWi = theImage.width;
    iHi = theImage.width;
    loop();
  }
}

function drawImage(rows, cols) {
  let n = 0;
  let cellColour;
  let z = 0;
  let sF = 1;

  if (useBars) {
    fill(16, 255 - 16);
    rect(width / 2, height / 2, width, height);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let x = int(map(c, 0, gridSize - 1, 0, iWi - 1));
      let y = int(map(r, 0, gridSize - 1, 0, iHi - 1));
      if (useV) {
        let k = theImage.get(x, y);
        z = int((red(k) + green(k) + blue(k)) / 3.0);
        cellColour = color(z);
      } else if (useR) {
        z = int(red(theImage.get(x, y)));
        cellColour = color(z, 0, 0);
      } else if (useG) {
        z = int(green(theImage.get(x, y)));
        cellColour = color(0, z, 0);
      } else if (useB) {
        z = int(blue(theImage.get(x, y)));
        cellColour = color(0, 0, z);
      } else if (use0) {
        if (brightness(theImage.get(x, y)) > 50) {
          z = 255 - 32;
        } else {
          z = 32;
        }
        cellColour = color(z);
      } else {
        let k = theImage.get(x, y);
        z = int((red(k) + green(k) + blue(k)) / 3.0);
        cellColour = k;
      }

      fill(cellColour);
      if (useSize) {
        sF = sqrt(z) / sqrt255;

        ellipse(
          c * cellSize + cellHalf,
          r * cellSize + cellHalf,
          cellSize * cellFill * sF,
          cellSize * cellFill * sF
        );
      } else {
        if (!useBars) {
          rect(
            c * cellSize + cellHalf,
            r * cellSize + cellHalf,
            cellSize * cellFill,
            cellSize * cellFill
          );
        }
      }

      if (useBars) {
        showBars(
          c * cellSize + cellHalf,
          r * cellSize + cellHalf,
          x,
          y,
          cellSize * cellFill
        );
      }
      if (
        dist(c * cellSize + cellHalf, r * cellSize + cellHalf, mouseX, mouseY) <
        cellSize * cellFill * 0.5
      ) {
        showTextColour = theImage.get(x, y);
        showText = true;
      }

      n++;
    }
  }
}

function showBars(x, y, iX, iY, maxSize) {
  let r = int(red(theImage.get(iX, iY)));
  let g = int(green(theImage.get(iX, iY)));
  let b = int(blue(theImage.get(iX, iY)));
  let rZ = r / 255.0;
  let gZ = g / 255.0;
  let bZ = b / 255.0;
  if (barR) {
    fill(255, 0, 0, 255 - 32);
    rect(
      x - maxSize / 3,
      y + maxSize / 2 - (rZ * maxSize) / 2,
      maxSize / 3,
      rZ * maxSize
    );
  }
  if (barG) {
    fill(0, 255, 0, 255 - 32);
    rect(x, y + maxSize / 2 - (gZ * maxSize) / 2, maxSize / 3, gZ * maxSize);
  }
  if (barB) {
    fill(0, 0, 255, 255 - 32);
    rect(
      x + maxSize / 3,
      y + maxSize / 2 - (bZ * maxSize) / 2,
      maxSize / 3,
      bZ * maxSize
    );
  }
}

function showImageText(k) {
  // -- within disc :
  rectMode(CORNER);
  fill(255 - 32, 128 + 32 + 32);
  rect(mouseX - 56, mouseY - 64, 44, 72);
  let rT = int(red(k));
  let gT = int(green(k));
  let bT = int(blue(k));
  let vT = int((red(k) + green(k) + blue(k)) / 3.0);

  textSize(16);
  textAlign(RIGHT);
  fill(255, 64, 64, 255 - 64);
  text(rT, mouseX - 18, mouseY - 48);
  fill(32, 255 - 64, 32, 255 - 32);
  text(gT, mouseX - 18, mouseY - 32);
  fill(64, 64, 255 - 32, 255 - 0);
  text(bT, mouseX - 18, mouseY - 16);
  fill(64, 128);
  textSize(18);
  text(vT, mouseX - 18, mouseY + 4);
  rectMode(CENTER);
}

function showHelp() {
  fill(255, 255, 255 - 64, 255 - 32);
  stroke(32, 255 - 64);
  rect(width / 2, height / 2, width * 0.8, height * 0.8);
  textSize(14);
  textAlign(LEFT, CENTER);
  fill(32, 255 - 32);

  let t = "";
  t += "HELP!";
  t += "\n        h  --  switch this message on and off";
  t += "\nChange the colour components shown ...";
  t += "\n        r  --  show red component of colour";
  t += "\n        g  --  show green component of colour";
  t += "\n        b  --  show blue component of colour";
  t += "\n        0  --  show binary view (two shades only)";
  t += "\n        v  --  show brightness";
  t += "\n        c  --  show full colour (combines r,g & b components)";
  t += "\nChange the size of the grid - the resolution of the image ...";
  t += "\n        ,<k  --  reduce grid size by one, ten, fifty";
  t += "\n        .>l  --  increase grid size by one, ten, fifty";
  t += "\nChange what we see in the grid ...";
  t += "\n        s  --  show brightness as circles (toggle on/off)";
  t += "\n        z  --  show colour components as bars (toggle on/off)";
  t += "\n        RGB  --  show colour component bars (toggle on/off)";
  t += "\nSee the numbers when you mouseover...";
  t += "\n        t  --  show text for detail (toggle on/off)";
  t += "\nChange the image data ...";
  t += "\n        SHIFT 1-7  --  switch images (we have seven to try)";

  helpMessage = t;
  noStroke();
  text(helpMessage, width * 0.16, height / 2);
}

function mouseMoved() {
  loop();
}

function keyPressed() {
  if (key == ",") {
    gridSize = max(2, gridSize - 1);
  }
  if (key == ".") {
    gridSize = min(width, gridSize + 1);
  }
  if (key == ">") {
    gridSize = min(width, gridSize + 10);
  }
  if (key == "<") {
    gridSize = max(2, gridSize - 10);
  }
  if (key == "k") {
    gridSize = max(2, gridSize - 50);
  }
  if (key == "l") {
    gridSize = min(width, gridSize + 50);
  }

  if (
    key == "v" ||
    key == "r" ||
    key == "g" ||
    key == "b" ||
    key == "0" ||
    key == "c"
  ) {
    useV = false;
    useR = false;
    useG = false;
    useB = false;
    use0 = false;
  }

  if (key == "v") useV = true;
  if (key == "r") useR = true;
  if (key == "g") useG = true;
  if (key == "b") useB = true;
  if (key == "0") use0 = true;

  if (key == "!") {
    setImage(0);
  }
  if (key == "@") {
    setImage(1);
  }
  if (key == "£") {
    setImage(2);
  }
  if (key == "$") {
    use0 = true;
    setImage(3);
  }
  if (key == "%") {
    setImage(4);
  }

  if (key == "^") {
    setImage(5);
  }

  if (key == "&") {
    setImage(6);
  }

  if (key == "s") {
    useSize = !useSize;
    if (useSize) useBars = false;
  }
  if (key == "z") {
    useBars = !useBars;
    if (useBars) useSize = false;
  }

  if (key == "3") {
    gridSize = 3;
  }
  if (key == "9") {
    gridSize = 9;
  }
  if (key == "7") {
    gridSize = 21;
  }
  if (key == "t") {
    showShowText = !showShowText;
  }

  if (key == "R") barR = !barR;
  if (key == "G") barG = !barG;
  if (key == "B") barB = !barB;

  if (key == "h" || key == "H") helpMe = !helpMe;

  loop();
}
