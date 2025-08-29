let radius, numPoints;
const lineWidth = 8;
let prevX = 0;
let prevY = 0;

function setup() {
  createCanvas(400, 400);
  radius    = width/2 - 2*lineWidth;
  numPoints = 3;
  background(0);
}

function draw() {
  background("HSLA(0,0%,0%,0.02)");

  strokeWeight(lineWidth);
  numPoints = map(mouseX, 0, width, 1, 90);
  const t = frameCount/20.0;

  for (let p=0; p<numPoints; p++) {
    stroke("HSL("+(frameCount+(p*10))%360+","+ (20 + 60*p/numPoints)+"%,"+60+"%)");
    const x = width/2  + radius*cos(map(mouseX, 0, width, 0.1, 0.3)*t*p/numPoints + t);
    const y = height/2 + radius*sin(map(mouseY, 0, height, 0.1, 0.3)*t*p/numPoints + t);
    if (p>0) {
      line(x, y, prevX, prevY);
    }
    prevX = x;
    prevY = y;
  }
}
