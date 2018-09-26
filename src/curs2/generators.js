function* range(start, end, step) {
  while (start <= end) {
    yield start
    start += step
  }
}

genObject = range(0, 2, 2);
console.log(genObject.next());
console.log(genObject.next());
console.log(genObject.next());
console.log(genObject.next());
