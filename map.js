const eqArray = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (actual, expected) => {
  if (eqArray(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//create map function that has 2 argument
// 1st argument is array
//2nd argument is callback function
const words = ["ground", "control", "to", "major", "tom"];

const mapFunction = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const expectedResult = ["g", "c", "t", "m", "t"];
const results1 = mapFunction(words, (word) => word[0]);
assertArraysEqual(results1, expectedResult);
