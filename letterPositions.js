const assertEqual = (actual, expected) => {
  if (actual === expected) {
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
