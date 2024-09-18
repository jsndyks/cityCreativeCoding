// -- A global variable - an array of Strings
String[] names; // <-- This is where we will store lines of data from the text file.

void setup()
{
  size(800, 500);
  fill(64);
  textSize(16);  // -- try changing the size of any text added with text();

  // -- load the text from the file into the array:
  names = loadStrings("namesData.txt");
}

void draw()
{
  background(255);

  // -- loop through all of the elements in array 'names[]' here :
  for (int lineNum=0; lineNum<names.length; lineNum++) {

    // -- add println() or text() in the loop :
    text(names[lineNum], 20+lineNum, 20+lineNum*20);  // <-- positions of text vary with lineNum
    // -- close the loop :
  }

  // -- stop the draw() loop for now :
  noLoop(); // <-- we don't need to print this 60 times per second!
}
