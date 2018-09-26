function add(x, y) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => x > 0 ? resolve(x + y) : reject("x should be > 0"), 1000);
  });
}

async function main() {
  var res = await add(1, 2);
  var res2 = await add(res, 3);
  console.log(res2); //6
}

// in cazul in care se primeste reject din add => se rezolva cu try-catch
main();
