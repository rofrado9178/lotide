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

module.exports = countLetters;
