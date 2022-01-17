const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("should return middle value from the array if array length is odd numbers", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("should return empty array if array length only 2 or less", () => {
    assert.deepEqual(middle([1, 2]), []);
    assert.deepEqual(middle([1]), []);
  });

  it("should return two element in the middle of array if array length is even", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});
