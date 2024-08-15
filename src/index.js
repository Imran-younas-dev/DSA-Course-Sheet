const recursive = require("./Recursive/basic");
const hash = require("./Hash/basic");
const arrays = require("./Arrays/index");
const sorting = require("./Sorting/sorting");
const searching = require("./Searching/index");
const string = require("./Strings/index");

// recursive.printSomethingNTimes(5);
// recursive.printSomethingNTimes(5);
// console.log(recursive.reverseAnArray([1, 2, 3, 4, 5]));
// console.log(recursive.palindromeOrNot("Madam"));
// recursive.fibonacciSeries(10);
// fibonacciSeries

/* ===============================hash ===================================*/
// console.log(hash.countTheFrequencyOfEachElement([1, 2, 3, 6, 1, 9, 1]));
// arrays.reverseAnArray([1, 2, 3, 6, 1, 9, 1]);
// console.log(
//   "find Max And Min",
//   arrays.findMaxAndMin([6, 2, 0, 3, 4, 10, 9, 11])
// );
// console.log("", arrays.kthSmallest([7, 10, 4, 3, 20, 15], 3));
// console.log("", arrays.sort012([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]));

// ======================================= sorting =======================
// console.log(
//   "Selection Sorting => ",
//   sorting.selectionSorting([64, 25, 12, 22, 11])
// );
// console.log(
//   "insertion Sorting => ",
//   sorting.insertionSorting([23, 1, 10, 5, 2])
// );

// console.log("searching", searching.linearSearch([1, 5, 8, 3, 5, 7, 9], 5));
// console.log(
//   "binarySearch",
//   searching.binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)
// );
// binarySearch

// ===================================================String
// console.log("String => ", string.reverseString("imran"));
// console.log("String => ", string.letterString("imran"));
// console.log("String => ", string.capitalizeTheFirstLetter("my name is imran"));
console.log("String => ", string.findLargestWord("my name is imran"));
