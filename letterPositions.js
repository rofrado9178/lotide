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

const letterPositions = function (words) {
  const position = {};

  for (let i = 0; i < words.length; i++) {
    if (words[i] !== " ") {
      if (position[words[i]]) {
        position[words[i]].push(i);
      } else {
        position[words[i]] = [i];
      }
    }
  }

  return position;
};

console.log("array index for every letter", letterPositions("hello"));
console.log(
  "array index for every letter",
  letterPositions("lighthouse in the house")
);

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
