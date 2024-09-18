---
title: "Programming Bootcamp Lecture: Introducing Processing"
viewport: width=device-width, initial-scale=1.0
---

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: {#page}
::: intro
This session introduces *Processing*: a coding platform for creating
graphical and interactive applications. This is a great environment for
learning to code and developing your programming skills.

**By the end of this session you should be able to:**

-   run and save Processing sketches on your computer;
-   use Processing commands to draw and colour simple shapes such as
    rectangles and circles;
-   organise your program instructions into two special methods
    `setup()` and `draw()`;
-   create simple sketches that change in response to mouse movement;
-   use Processing\'s [reference
    pages](https://processing.org/reference){target="_blank"} to find
    out more about the Processing language.
:::

::::::::: units-row
:::::::: unit-70
### 1. How to use these pages

Before we get going, here are a few guidelines that will help you get
the most of out these pages during the bootcamp. They contain a mixture
of information, theory and practical tasks. The tasks are probably the
most important bit - these two weeks are mostly about *doing* rather
than just reading. If you want to be a good coder, you need to code! And
the more you practice the easier it gets.

#### Coding tasks

::: codeTask
Anything that looks like this is a \'coding task\'. This is your chance
to have a go doing something rather than just reading about it. Usually
you should have a go doing the task at that point in the page before
continuing to read further.\
\
Sometimes we will do these tasks together in the lecture room, but
mostly you will do them in the lab classes or at home. Remember, don\'t
just persuade yourself that you *could* do the task; actually do it.
Coding is how you learn to code; there is no other way.\
\
And remember, if you have any problems completing the tasks, you can
always ask for help in the lab classes.
:::

#### Core tasks

::: coreTask
These are \'core tasks\' which directly develop and test the core skills
introduced in each session. It is very important that you complete these
tasks. During the labs, you should prioritise completion of the core
tasks before others.\
\
You have widely differing backgrounds and skills. Some of you might race
through all the exercises in a lab, but most of you will still have some
work left to do at the end. After the labs, we strongly encourage you to
finish *all* unfinished exercises as homework.
:::

#### Challenges

::: challenge
These are coding tasks that are a bit more challenging. They may require
you to use features and techniques that go a bit beyond what we have
covered so far in the classes. So do have a go trying them, but don\'t
panic if you struggle.\
\
If you attempt a challenge but find you can\'t do it, try to work out
*why* you can\'t. Part of learning to program well is being able to
identify why something isn\'t working.
:::

#### Asides

::: aside
These are background or related notes that are not essential to the main
outcomes of the lecture but that you may find interesting or helpful.
:::

#### Tips

::: tip
Brief tips or common mistakes will be highlighted like this. Watch out
for them as they could save you much time and effort.
:::

#### Copying code

The programs you will be writing with Processing are known as
*Sketches*. In the lecture notes you will often see sketch code like
that below. You can usually copy the code straight from these pages into
Processing by selecting the code then using the `Edit->Copy` option (or
`Ctrl-C`) from your browser and `Edit->Paste` (or `Ctrl-V`) in
Processing .
::::::::
:::::::::

:::::: units-row
:::: unit-70
``` {.brush: .processing; .gutter: .false; .toolbar: .false;}
void setup()
{
  size(400,300);

  textAlign(CENTER,CENTER);
  textSize(32);
  fill(120);
  stroke(200);
}

void draw()
{
  background(255);

  text("Hello Bootcampers",mouseX,mouseY+40);
  circle(mouseX,mouseY,35);
}
```

We\'ve made it as easy as possible to copy code from these pages
directly into Processing so you can get sketches quickly up and running.
However, you will not learn to code properly if you simply copy code
without understanding it.

::: tip
Outside of the lectures, we generally ask you *not* to copy and paste
any code unless you wrote it in the first place.
:::
::::

::: {.unit-30 .annotation}
Some sketches will be embedded in these pages. Try clicking the image
above to activate the sketch.
:::
::::::

:::::: units-row
::::: unit-70
### 2. Your first processing sketch

::: task
Before starting this section make sure you have Processing installed on
your computer. If you haven\'t done so already, see the instructions for
downloading and installing Processing in the first section of [Getting
Started with
Processing](https://processing.org/tutorials/gettingstarted/){target="_blank"}
:::

By the end of this bootcamp you will be producing exciting apps
including games and interactive graphics with Processing. These apps are
known as \'sketches\' and over the next couple of weeks you will be
producing a sketchbook full of your own. But first let\'s start with
something simple.

::: codeTask
Start Processing and type the following line of code. Then press the
\'Run\' button (right-pointing triangle) to show your sketch.\
\

``` {.brush: .processing; .gutter: .false; .toolbar: .false;}
rect(20,30,70,35);
```
:::
:::::
::::::

::::: units-row
::: unit-70
If all goes well you should see a white rectangle on a grey background.
Hardly the most exciting sketch but it does demonstrate the first
important idea behind coding. ***A computer program is a set of precise
instructions that gets the machine to do stuff***. In Processing (and in
the Java language which we will use after the bootcamp) those
instructions are generally **ordered** and tell the computer how to
achieve certain tasks. In this case our simple program consists of a
single instruction that tells Processing to draw a rectangle (`rect`)
positioned at coordinates (20,30) with a width of 70 pixels and a height
of 35 pixels.

Notice the instructions also include brackets \'`(`\' and \'`)`\' as
well as a semicolon at the end. Unlike the English language, punctuation
such as brackets and semicolons in a computer programming language is
critical. If you forget them (and you will at some stage), your program
will not work. Such errors that are about how the program is written
(missing punctuation, incorrect word order) are called syntax errors.
***The code you write must be free of syntax errors before the computer
can understand and run it.***

To get a better sense of how the language works, lets add a little more
to our program:
:::

::: {.unit-30 .annotation}
![](https://staff.city.ac.uk/~jwo/bootcamp2018/lecture01/images/simpleRect.png)

A simple rectangle. Not very exciting yet.
:::
:::::

::::: units-row
::: unit-70
``` {.brush: .processing; .gutter: .false; .toolbar: .false;}
rect(20,30,70,35);
circle(62,60,40);
```

The second command `circle` works in a similar way to the first command
but this time draws an circle centred at position (62,60) with a
diameter of 40 pixels.

You should be able to spot the pattern in how we are issuing
instructions to draw our sketch. The first word or \'command\' (in blue)
states what sort of shape to draw, then four numbers in brackets specify
the position and size of the shape. Finally the semicolon is used to say
we have finished issuing the command.

You should also notice that the circle appears to be \'on top\' of the
rectangle. This illustrates an important principle that applies to much
of our coding: ***Commands are run in the order in which we issue the
program instructions***. You can confirm this by simply swapping the
order of instructions:
:::

::: {.unit-30 .annotation}
![](https://staff.city.ac.uk/~jwo/bootcamp2018/lecture01/images/rectAndCircle.png)

A rectangle and circle.
:::
:::::

:::::: units-row
:::: unit-70
``` {.brush: .processing; .gutter: .false; .toolbar: .false;}
circle(62,60,40);
rect(20,30,70,35);
```

As our programs become more sophisticated we will see ways in which we
can alter the sequence in which commands are executed, but for now it is
important not to forget that we can control the order in which things
happen in our programs by changing the order of coding instructions.

::: aside
Processing uses the Java programming language as a way of issuing
instructions to the computer. Java is known as an **object-oriented
language** because it encourages you to organise your code into units
known as *objects* and *classes* (more on this early next week). It can
also be thought of as a **procedural language** because it requires you
to issue ordered instructions on **how** you want the computer to
behave. In contrast, some other programming languages are described as
**declarative** because they require you to declare the task you want
solving rather than how it should be solved.
:::
::::

::: {.unit-30 .annotation}
![](https://staff.city.ac.uk/~jwo/bootcamp2018/lecture01/images/circleAndRect.png)

The circle is drawn first, then the rectangle.
:::
::::::

:::: units-row
::: unit-70
### 3. The graphical coordinate system

Our sketches so far have been rather small and unexciting. We can set
the size of a sketch with another Processing command called, you\'ve
guessed it, `size`. Adding this as the first line of our sketch:
:::
::::

::::: units-row
::: unit-70
``` {.brush: .processing; .gutter: .false; .toolbar: .false;}
size(260,200);
circle(62,60,40);
rect(20,30,70,35);
```

draws exactly the same circle and rectangle of the same size, but this
time on a larger \'canvas\' that is 260 pixels wide and 200 tall. The
size command is issued once, at the start of your sketch since its size
would not normally change during its lifetime.

You may have noticed that all the commands we have used so far have
involved specifying either a location on screen (e.g. the position of
the circle or rectangle) or the size of something (the width and height
of the sketch canvas, the rectangle and the circle). They all use the
same *coordinate system* - that is a pair of numbers representing
distances along the horizontal x-axis and the vertical y-axis.
:::

::: {.unit-30 .annotation}
![](https://staff.city.ac.uk/~jwo/bootcamp2018/lecture01/images/largeCircleAndRect.png)

The circle and rectangle this time drawn on a larger canvas
:::
:::::

:::::: units-row
:::: unit-70
Unlike a conventional set of graph axes, the *origin* (0,0) of the
coordinate system is at the top-left, not the bottom-left. So increasing
the y-value of a coordinate will move downwards not upwards.

As we will be doing lots of drawing with Processing during this bootcamp
it is important you are comfortable with the principle of using
coordinates to specify location and size. To recap: **A location of
something is specified with two numbers in the order (x,y) that indicate
the distance from the top-left corner in the horizontal and vertical
directions respectively.** For something to be visible in your sketch
the x-value should be between 0 and the width of the sketch (as
determined by the first number of the `size()` command) and the y-value
should be between 0 and the height of the sketch (as determined by the
second number of the `size()` command).

::: tip
Keep a pencil and pad of paper handy when you are designing your
sketches. Drawing out what you are intending to do will help you keep
track of your coding. This is especially valuable as your programs
become more complicated.
:::

Using our newly enlarged canvas, we can explore some of the other shape
drawing commands available in Processing. In addition to the rectangle
and circle, we can draw triangles, lines and irregular quadrilaterals.
All use the same coordinate system for specifying either locations of
the shape (e.g. the centre of a circle; corner of a rectangle; vertices
of a triangle or quadrilateral), or its size (e.g. width and height of a
rectangle or ellipse). The example below is a sketch that draws some of
these shapes:
::::

::: {.unit-30 .annotation}
Specifying locations in the Processing coordinate system *(click to
enlarge)*
:::
::::::

:::::: units-row
:::: unit-70
``` {.brush: .processing; .gutter: .false; .toolbar: .false;}
size(400, 300);

line(150,100,350,200);
rect(150,190,80,60);
ellipse(300,100,40,60);
triangle(50,140, 100,140, 75, 210);
quad(30,20, 150,50, 110,110, 40,90);
```

Each of the pairs of numbers after a drawing command corresponds to some
location in our sketch using the same coordinate system. To see how the
number relate to the properties of the shape, you can browse the
[Processing
Reference](https://processing.org/reference/){target="_blank"} (for
example, here is the reference for the
[quad()](https://processing.org/reference/quad_.html){target="_blank"}
drawing command).

::: tip
Make use of the [Processing
Reference](https://processing.org/reference/){target="_blank"} when you
wish to learn more about how a processing command works or you wish to
explore the capabilities of the language. You can bookmark the web page
or access an offline version via Processing\'s `Help->Reference` menu.
:::
::::

::: {.unit-30 .annotation}
Some shape primitives
:::
::::::

:::: units-row
::: unit-70
### 4. Drawing styles

So far, our sketches have been a little dull and grey. Thankfully,
Processing allows you to style the drawing of shapes using various
colours and line thicknesses. You can do this with the commands
[stroke()](https://processing.org/reference/stroke_.html){target="_blank"},
[fill()](https://processing.org/reference/fill_.html){target="_blank"}
and
[strokeWeight()](https://processing.org/reference/strokeWeight_.html){target="_blank"}
among others. Unlike the drawing primitives, setting a drawing style
doesn\'t immediately draw something on screen. Instead it sets the style
of any drawing done in your sketch *after the style has been set*. You
can think of it as selecting the colour and type of pen to use before
you start drawing something.
:::
::::

\

::::: units-row
::: unit-70
Both the
[stroke()](https://processing.org/reference/stroke_.html){target="_blank"}
and
[fill()](https://processing.org/reference/fill_.html){target="_blank"}
commands require a colour to be provided inside the brackets that
follow. There are plenty of ways of specifying colours, but for the
moment we will use the default (*red*,*green*, *blue*) triplet. The
three numbers required specify the three colour components and are
scaled between 0 and 255. So, for example, to set the internal fill
colour of a shape to bright green, you would use `fill(0,255,0)`. To set
the outline colour of the shape to red, you might use `stroke(255,0,0)`.
If you are not sure how these numbers relate to colours you wish to use,
you can always bring up Processing\'s *color selector* from the `Tools`
menu. (Alternatively, there are similar tools on the web, such as [this
one](https://www.w3schools.com/colors/colors_picker.asp){target="_blank"}.)

We can use the same way of defining colours to set the background colour
of the entire sketch to something a little more inspiring than the
default grey. We do this with the
[background()](https://processing.org/reference/background_.html){target="_blank"}
command specifying the background colour we would like inside brackets.
For example to set a pale blue background we would add the following
line to the beginning of our sketch:

``` {.brush: .processing; .gutter: .false; .toolbar: .false;}
                    background(200,200,255);
                     
```

The thickness of shape outlines that appear on the coloured background
can be controlled with the
[strokeWeight()](https://processing.org/reference/strokeWeight_.html){target="_blank"}
command, requiring a single number in brackets indicating the thickness
of the line in pixel units. This can be a decimal number between 0 and 1
if you wish to use very thin lines (useful for faint outlines). For
thicker lines you can control the appearance of their end points and
corners with the
[strokeCap()](https://processing.org/reference/strokeCap_.html){target="_blank"}
and
[strokeJoin()](https://processing.org/reference/strokeJoin_.html){target="_blank"}
commands.

If you don\'t wish to show any outline at all, you can use the command
[noStroke()](https://processing.org/reference/noStroke_.html){target="_blank"}.
In a similar way, to show only the outline with no internal fill colour,
you can use
[noFill()](https://processing.org/reference/noFill_.html){target="_blank"}.
If you were to specify both `noStroke()` and `noFill()` before drawing
something, it would not be visible at all on screen.
:::

::: {.unit-30 .annotation}
Processing\'s colour selector allows you to find the (r,g,b) numbers for
any selected colour.
:::
:::::

:::: units-row
::: unit-70
The example below shows how the various style settings might be applied
to our simple set of shapes:
:::
::::

:::::: units-row
:::: unit-70
``` {.brush: .processing; .gutter: .false; .toolbar: .false;}
size(400, 300);          // Sketch is 400 pixels wide and 300 tall.
background(254,232,134); // Yellow background colour.

strokeWeight(4);         // Thick outline
stroke(78,38,11);        // Dark brown outline colour.
line(150,100,350,200);

strokeWeight(0.6);       // Thin outline.
noFill();                // No internal colouring.
rect(150,190,80,60);

fill(252,135,135);       // Pink internal fill colour.
ellipse(300,100,40,60);

strokeWeight(1.5);       // Medium outline.
fill(133,180,117);       // Green internal fill colour.
triangle(50,140, 100,140, 75, 210);

noStroke();              // No outline.
quad(30,20, 150,50, 110,110, 40,90);
```

You will notice that our example sketches are getting a little bit more
complicated as we add new shapes and new styling commands. One way of
making sure we can keep track of what our sketch does as it gets longer
is to add *comments* to our code. These are the grey lines that start
with a `//`. Whenever you include these two symbols, the rest of the
line is then ignored by Processing so you are free to write text to
explain what the code does.

::: tip
Adding comments to your code will make things *much* easier when your
sketches become more complex. They help to remind you what you intended
to do with your code.
:::
::::

::: {.unit-30 .annotation}
Applying styles to shape drawing.
:::
::::::

:::: units-row
::: unit-70
### 5. Adding movement to your sketches

We can draw shapes, and we can colour them. Now lets look at how we can
get our sketches to move. To understand how we do this, we need to
introduce one further programming concept - that of the *method*. We
will look at methods more fully later in the week, but for now we will
consider a method as simply a collection of commands that are grouped
together to do something.

Processing has two built-in methods that are usually part of a sketch -
the *setup method* and the *draw method*. As the names suggest, the
`setup()` method is used to group together any commands that are needed
to set up the sketch. These typically include things like setting the
size of the sketch and sometimes selecting the stroke and fill colours
(assuming they don\'t change during the lifetime of the sketch). The
`draw()` method, as you might expect is where we group together all the
commands that do our sketch drawing.

The code to create these two methods looks like this:

``` {.brush: .processing; .gutter: .false; .toolbar: .false;}
void setup()
{
   // Code to set up the sketch goes here.
}

void draw()
{
  // Drawing code goes here.
}
```

Both `setup()` and `draw()` have the word `void` in front of them, which
for the moment we will ignore. Notice that neither has the a semicolon
at the end (unlike `background`, `rect`, `ellipse` etc.). Instead they
are followed by a pair of curly brackets known as *braces*. These braces
define the beginning and end of the method. Whenever you place code
inside a pair of braces like this, you should indent it by two spaces or
a tab. This will make your code a little easier to read as the
indentation helps to make it clear it is part of block of code (in these
examples either the `setup()` or `draw()` methods).

Our sketch then involves adding the commands we wish to both methods.
Here, for example is code to draw a red rectangle on a yellow background
using our two methods:

``` {.brush: .processing; .gutter: .false; .toolbar: .false;}
void setup()
{
  size(400,300);
  background(255,236,149);
  fill(203,118,122);
}

void draw()
{
  rect(40,40,120,80);
}
```
:::
::::

::::: units-row
::: unit-70
Why do we need to go to the effort of creating these two methods when we
could have drawn the same sketch directly with the `size()`,
`background()`, `fill()` and `rect()` commands?

The answer lies in an important behaviour of all Processing sketches.
Any code placed inside the `setup()` method (i.e. placed between the
curly braces following the `void setup()` line) will only ever be
executed once --- as soon as the sketch in run. However any code inside
the `draw()` method isn\'t just executed once, but *repeats 60 times a
second*.

In the simple rectangle sketch above it\'s hard to notice the sketch
being redrawn 60 times a second because nothing changes on each new
redraw. But if we make a simple change so that the rectangle isn\'t
always drawn at location (40,40) but instead at the current mouse
position, we will see the effect of multiple redraws.

Replacing the first two numbers in the `rect()` command with two special
words `mouseX` and `mouseY` gives us our first dynamic sketch:

``` {.brush: .processing; .gutter: .false; .toolbar: .false;}
void setup()
{
  size(400, 300);
  background(255, 236, 149);
  fill(203, 118, 122);
}

void draw()
{
  rect(mouseX, mouseY, 120, 80);
}
```
:::

::: {.unit-30 .annotation}
:::
:::::

::::: units-row
::: unit-70
`mouseX` and `mouseY` are special Processing *variables* that keep track
of the location of the mouse pointer and report the horizontal
(`mouseX`) and vertical (`mouseY`) coordinates in pixel units. Every
time the code in the `draw()` method is repeated, Processing will check
the values these two special variables and draw the rectangle at the
location represented by them.

We will delve a little more deeply into using variables in the next
session, but now you should be able to draw a range of shapes in a
Processing sketch, control their colour and appearance and make your
sketch respond to changes in the mouse position.
:::

::: {.unit-30 .annotation}
A moving rectangle sketch (click to activate)
:::
:::::

:::::: units-row
:::: unit-70
### 6. Summary and Further Reading

-   A computer program is a series of precisely defined instructions
    that gets the computer to do something.
-   Processing is a variation of the Java programming language focussed
    on creating graphical and interactive applications known as
    *sketches*.
-   A Processing command usually consists of a keyword (such as `rect`
    or `size`) followed by brackets, some numbers and a semicolon.
-   The order of program instructions is important --- within a block of
    code instructions are executed in sequence from top to bottom.
-   Most Processing sketches contain at least two special *methods*
    ---`setup()` which contains the one-off setting up instructions, and
    `draw()` that contains the instructions repeated 60 times a second.

::: aside
You may find the following helpful if you\'d like to find out more about
getting started with Processing and drawing shapes\
\

-   [Getting Started with
    Processing](https://processing.org/tutorials/gettingstarted){target="_blank"}
    --- A guide to installing Processing navigating its menus and
    buttons.
-   [Hello Processing](https://hello.processing.org){target="_blank"}
    --- an interactive video tutorial from Dan Shiffman that will get
    you started with Processing.
:::
::::

::: {.unit-30 .annotation}
\
:::
::::::
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
