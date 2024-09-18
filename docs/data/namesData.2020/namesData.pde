String[] names;

void setup()
{
  size(300, 500);
  fill(64);
  textSize(18);  // -- try changing the size of any text added with text();

  names = loadStrings("namesData.txt");
}

void draw()
{
  background(255);
  
  // -- loop through all of the elements in array 'names[]' here :
  
  // -- add println() or text() in the loop :
  
  // -- stop the draw() loop for now :
  noLoop();
}
