const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// assertEqual("Lighouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Lighthouse Labs", "Lighthouse Labs");
// assertEqual(3, 4);

// console.assert("Lighthouse Labs", "Bootcamp");

const eqArray = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
console.log(eqArray([1, 2, 3], [1, 2, 3]));
console.log(eqArray([1, 2, 3], [3, 2, 1]));
console.log(eqArray(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArray(["1", "2", "3"], ["1", "2", 3]));

assertEqual(eqArray([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArray([1, 2, 3], [1, 2, "4"]), true);
