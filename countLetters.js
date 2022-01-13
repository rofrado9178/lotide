const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (words) {
  let counts = {};
  const joinWords = words.replace(/\s/g, "");

  for (const word of joinWords) {
    if (counts[word]) {
      counts[word] += 1;
    } else {
      counts[word] = 1;
    }
  }
  return counts;
};

assertEqual(countLetters("hh").h, 3);
