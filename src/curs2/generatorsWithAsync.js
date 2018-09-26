function asyncAdd(x, y) {
  setTimeout(function(){it.next(x+y)}, 1000);
}

function *process() {
  var res = yield asyncAdd(1, 2);
  var res2 = yield asyncAdd(res, 3);
  console.log(res2);
}

it = process();
it.next();
