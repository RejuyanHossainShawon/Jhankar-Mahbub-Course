function animalCalculator(depth) {
  var animal = 0;
  if (depth <= 10) {
    animal = depth * 50;
  } else if (depth <= 20) {
    var firstPart = 10 * 50;
    var remaining = depth - 10;
    animal = remaining * 100;
    animal = animal + firstPart;
  } else {
    var firstPart = 10 * 50;
    var secondPart = 10 * 100;
    var remaining = depth - 20;
    animal = remaining * 300;
    animal = animal + firstPart + secondPart;
  }
  return animal;
}

var result = animalCalculator(12);
console.log(result);
