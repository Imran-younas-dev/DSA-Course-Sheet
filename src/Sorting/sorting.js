const selectionSorting = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j);
      }
    }
  }
  return arr;
};
const insertionSorting = (arr) => {
  console.log("actual array", arr);

  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
    console.log(`arr i => ${i} - j => ${j}`, arr);
  }
  return arr;
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
module.exports = {
  selectionSorting,
  insertionSorting,
  swap,
};
