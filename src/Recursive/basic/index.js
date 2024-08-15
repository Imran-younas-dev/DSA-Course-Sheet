const printSomethingNTimes = (n) => {
  if (n === 0) {
    return;
  }
  printSomethingNTimes(n - 1);
  console.log(n);
};

const PrintNameNTimesUsingRecursion = (n) => {
  if (n === 0) {
    return;
  }
  PrintNameNTimesUsingRecursion(n - 1);
  console.log("Imran Younas");
};

const SumOfFirstNNumbers = (n) => {
  if (n === 0) {
    return 1;
  }
  return n + SumOfFirstNNumbers(n - 1);
};

const factorialOfNNumbers = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * factorialOfNNumbers(n - 1);
};

const reverseAnArray = (n) => {
  if (n.length === 0) {
    return [];
  }
  return reverseAnArray(n.slice(1)).concat(n[0]);
};
const palindromeOrNot = (str) => {
  str = str?.toLowerCase().replace(/\s/g, "");
  const strLength = str.length;
  if (strLength === 0 || strLength === 1) {
    return true;
  }
  const firstChar = str.charAt(0);
  const lasrChar = str.charAt(strLength - 1);
  if (firstChar != lasrChar) {
    return false;
  }
  return palindromeOrNot(str.slice(1, strLength - 1));
};

// The Fibonacci sequence starts with 0 and 1.
// Every subsequent number is the sum of the previous two numbers.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, ...
const fibonacciSeries = (n, a = 0, b = 1, current = 0) => {
  if (current === n) {
    return;
  }
  console.log(a);
  fibonacciSeries(n, b, a + b, current + 1);
};
module.exports = {
  reverseAnArray,
  palindromeOrNot,
  fibonacciSeries,
  SumOfFirstNNumbers,
  factorialOfNNumbers,
  printSomethingNTimes,
  PrintNameNTimesUsingRecursion,
};
