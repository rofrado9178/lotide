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

const middle = (array) => {
  let resultArray = [];

  //find the result if array length less than 2 item return []
  if (array.length < 3) {
    return (resultArray = []);
  } else if (array.length % 2 !== 0) {
    resultArray.push(array[Math.floor(array.length / 2)]);
    return resultArray;
  } else if (array.length % 2 === 0) {
    resultArray.push(array[Math.floor((array.length - 1) / 2)]);
    resultArray.push(array[Math.floor(array.length / 2)]);
    return resultArray;
  }
};

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
