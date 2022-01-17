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

module.exports = letterPositions;
