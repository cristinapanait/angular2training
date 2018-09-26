function readonly(target, key, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class Meal {
  @readonly
  entree = 'salad';
}

// var dinner = new Meal();
// cosole.log(dinner.value);

// Object.defineProperty(Meal.prototype, 'entree',
//   {value: 'salad', enumerable: false, configurable: true, writable: false});
//
// var dinner = new Meal();
// dinner.entree = 'soup';

