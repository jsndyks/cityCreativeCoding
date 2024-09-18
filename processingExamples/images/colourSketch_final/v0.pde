// -- Colours have 1, 2, 3 or 4 parameters

void setup() {
  size(800, 800);
}

void draw() {

  background(255);
  noStroke();

  // -- fill() takes 1,2, 3 or 4 arguments to specify a colour :
  // -- https://processing.org/reference/fill_.html
  
  fill(255, 0, 0);          // <-- how many colours? 1-4
  rect(100, 100, 500, 500);
  fill(0, 0, 255);
  rect(200, 200, 500, 500);
}
