const { swap } = require("../Sorting/sorting");

const linearSearch = (arr, searchKey) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === searchKey) {
      return i;
    }
  }
  return -1;
};
const binarySearch = (arr, searchKey) => {
  let left = 0;
  let right = arr.length - 1;

  /* e.g => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
  => left = 0; right = 9, middle = 4
    - case 1 : 0 <= 9 true => arr[4] === 2 => 2 5 === 2 wrong
    - arr[middle] > searchkey e.g 5 > 2 it means we have to go to left side 
    - midle will be 4,3,2 then return middle
  */
  while (left <= right) {
    let middle = Math.floor(left + right / 2);

    // console.log(middle);
    if (arr[middle] === searchKey) {
      return middle;
    } else if (arr[middle] < searchKey) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
};

module.exports = {
  linearSearch,
  binarySearch,
};
