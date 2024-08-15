const reverseAnArray = (arr) => {
  /* 1st method */
  const reversedList = arr.map((e, i, a) => a[a.length - 1 - i]);
  console.log("reversedList", reversedList);

  /* 2nd method */
  for (let i = arr.length - 1; i >= 0; i--) {
    const element = arr[i];
    console.log("element", element);
  }
  /* 3rd method  */
  function reverse(arr) {
    return arr.length < 2 ? arr : [arr.pop()].concat(reverse(arr));
  }
  console.log(reverse(arr));
};

const findMaxAndMin = (arr) => {
  /* 1st method */
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return {
    max,
    min,
  };
};
/*
Input: arr[] = [7, 10, 4, 3, 20, 15], k = 3
Output:  7
Explanation: 3rd smallest element in the given array is 7.
*/
/* For large datasets, consider using more efficient algorithms like QuickSelect to improve performance. */
const kthSmallest = (arr, k) => {
  if (k <= 0 || k > arr.length) {
    return 0;
  }
  /* 1st method */
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  /* 2nd method */
  /* by default, sorts elements as strings. This can lead to unexpected results when sorting numbers. For example, [10, 2, 1] would be sorted as [1, 10, 2] because it treats the numbers as strings. */
  console.log("sorted Array => ", arr.sort((a, b) => a - b)[k - 1]);

  return arr[k - 1];
};

/* Dutch National Flag problem 
e.g arr = [0, 1, 0, 0, 2, 1, 0, 2]
Given N balls of colour red, white or blue arranged in a line in random order. You have to arrange all 
the balls such that the balls with the same colours are adjacent with the order of the balls, 
with the order of the colours being red, white and blue (i.e., all red coloured balls come first then the white coloured balls and then the blue coloured balls). 
*/
const sort012 = (arr) => {
  /* 3 pointers here low (0s), ones (1s):, and tows (2s) */
  let zeros = 0;
  let ones = 0; /* treat as a mid */
  let tows = arr.length - 1;
  while (ones <= tows) {
    if (arr[ones] === 0) {
      let temp = arr[zeros];
      arr[zeros] = arr[ones];
      arr[ones] = temp;
      ones++;
      zeros++;
    } else if (arr[ones] === 1) {
      ones++;
    } else if (arr[ones] === 2) {
      let temp = arr[tows];
      arr[tows] = arr[ones];
      arr[ones] = temp;
      tows--;
    }
  }
  return arr;
};

module.exports = {
  sort012,
  kthSmallest,
  findMaxAndMin,
  reverseAnArray,
};
