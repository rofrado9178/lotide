const findKeyByValue = function (object, value) {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
    // console.log("return value from key: ", key);
  }
};

module.exports = findKeyByValue;
