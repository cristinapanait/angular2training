class Rectangle extends Shape {
  constructor(id, x, y, width, height) {
    console.log(1);
    super(id, x, y);
    console.log(2);
    this.width = width;
    this.height = height;
    console.log('I am a Rectangle!');
  }
}

new Rectangle(2, 3, 7, 8);
var x = new Rectangle(2, 3, 4, 5);
