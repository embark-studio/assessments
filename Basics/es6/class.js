class object {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  getArea(width, height) {
    return width * height;
  }
}
const trapezoid = new object();
console.log(trapezoid.getArea(10, 5) + "\n");


class rectangle extends object {
  ifSquare(height, width) {
    if (height === width) {
      return true;
    } else
      return false;
  }
}

const square = new rectangle();
console.log(square.ifSquare(5, 5));
console.log(square.ifSquare(6, 5));
