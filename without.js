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

const without = (sources, removeSources) => {
  let newArray = [];
  for (let i = 0; i < sources.length; i++) {
    let seenRemove = false;
    for (let x = 0; x < removeSources.length; x++) {
      if (sources[i] === removeSources[x]) {
        seenRemove = true;
        break;
      }
    }
    if (!seenRemove) {
      newArray.push(sources[i]);
    }
  }
  return newArray;
};

console.log(without([1, 2, 3, 1], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
