const { eqObjects } = require("./eqObjects");

const assertObjectsEqual = (actual, expected) => {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(
      `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
  console.log("inspect the actual", actual);
};

module.exports = { assertObjectsEqual };
