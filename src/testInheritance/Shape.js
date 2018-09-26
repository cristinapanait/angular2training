class Shape {
  constructor(id, x, y) {
    this.id = id;
    this.move(x, y);
  }

  move(x, y) {
    this.x = x;
    this.y = y;
    console.log('I am a Shape');
  }
}

new Shape();

