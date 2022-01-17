const middle = (array) => {
  let resultArray = [];

  //find the result if array length less than 2 item return []
  if (array.length < 3) {
    return (resultArray = []);
  } else if (array.length % 2 !== 0) {
    resultArray.push(array[Math.floor(array.length / 2)]);
    return resultArray;
  } else if (array.length % 2 === 0) {
    resultArray.push(array[Math.floor((array.length - 1) / 2)]);
    resultArray.push(array[Math.floor(array.length / 2)]);
    return resultArray;
  }
};

module.exports = middle;
