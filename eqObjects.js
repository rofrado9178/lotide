const eqArray = require("./eqArrays");

const eqObjects = function (object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);

  if (key1.length !== key2.length) {
    return false;
  }
  for (const key of key1) {
    if (Array.isArray(object1[key])) {
      if (eqArray(object1[key], object2[key]) !== true) {
        return false;
      }
      continue;
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

module.exports = { eqObjects };
