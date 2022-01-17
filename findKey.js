//create function name findKey
//function takes in an object and a callback
//it should scan the object and return the first key that callback return true
//if key is not found should return undifined

const findKey = (obj, callback) => {
  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;
