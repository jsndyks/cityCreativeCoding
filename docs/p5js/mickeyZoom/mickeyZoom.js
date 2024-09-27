let faceSize,earSize;


function setup() {
  createCanvas(400, 400);
  fill(32,32);
  faceSize = 18;
  earSize = 12;
}

function draw() {
  background(255);
  const centreX = width / 2;
  const centreY = height / 2;

  ellipse(centreX, centreY, faceSize, faceSize);
  ellipse(centreX-faceSize/3, centreY-faceSize/3, earSize, earSize);
  ellipse(centreX+faceSize/3, centreY-faceSize/3, earSize, earSize);

  faceSize = faceSize * 1.01;  // -- allocate to faceSize its current value multiplied by 1.01
  earSize = earSize * 1.01;    // -- allocate to earSize its current value multiplied by 1.01
}
