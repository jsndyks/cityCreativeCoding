class MyRectangle
{
  constructor(xPos, yPos, w, h)
  {
    this.xPos = xPos;
    this.yPos = yPos;
    this.w    = w;
    this.h    = h;
  }

  // Calculates the area of the rectangle.
  getArea()
  {
    return this.w*this.h;
  }

  // Determines if the other rectangle provided as a parameter overlaps with this one.
  overlapsWith(other)
  {
    if ((other.xPos+other.w <= this.xPos) || (other.xPos >= this.xPos+this.w) ||
      (other.yPos+other.h <= this.yPos) || (other.yPos >= this.yPos+this.h))
    {
      return false;
    }
    return true;
  }
}
