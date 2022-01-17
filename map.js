//create map function that has 2 argument
// 1st argument is array
//2nd argument is callback function
const words = ["ground", "control", "to", "major", "tom"];

const mapFunction = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = mapFunction;
