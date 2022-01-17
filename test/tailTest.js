const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("return an array without the head of an element of array", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });

  it("return an array without the head of an element of array", () => {
    assert.deepEqual(tail([1, 2]), [2]);
  });
});
