const countTheFrequencyOfEachElement = (arr) => {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  }

  let maxCount = -Infinity;
  let minCount = Infinity;

  // Find the max and min counts
  for (const [key, value] of map) {
    if (value > maxCount) {
      maxCount = value;
    }
    if (value < minCount) {
      minCount = value;
    }
  }

  return { maxCount, minCount };
  // return map;
};

module.exports = {
  countTheFrequencyOfEachElement,
};
