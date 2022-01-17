const without = (sources, removeSources) => {
  let newArray = [];
  for (let i = 0; i < sources.length; i++) {
    let seenRemove = false;
    for (let x = 0; x < removeSources.length; x++) {
      if (sources[i] === removeSources[x]) {
        seenRemove = true;
        break;
      }
    }
    if (!seenRemove) {
      newArray.push(sources[i]);
    }
  }
  return newArray;
};

module.exports = without;
