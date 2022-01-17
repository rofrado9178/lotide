//create function name takeUntil
//function will take two paraters for array and callback

const takeUntil = function (array, callback) {
  let ourResults = [];
  for (const item of array) {
    if (!callback(item)) {
      ourResults.push(item);
    } else {
      break;
    }
  }
  return ourResults;
};

module.exports = takeUntil;
