const balls = [];

function setup() {

  createCanvas(400, 400);

  for (let i=0; i<100; i++)
  {
    balls.push(new Ball());
  }
}


function draw() {

  background(254, 244, 232);  // Pale background.

  // First draw the balls in their current position.
  balls.forEach((b) => b.draw());


  // Check to see if any balls have collided
  for (let i=0; i<balls.length; i++)
  {
    // Compare each ball with any untested others
    for (let j=i+1; j<balls.length; j++)
    {
      if (balls[i].hasCollidedWith(balls[j]))
      {
        balls[i].bounce(balls[j]);
      }
    }
  }

  // Finally move all the balls by one step.
  balls.forEach((b) => b.move());
}
