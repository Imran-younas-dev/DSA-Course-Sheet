const reverseString = (str) => {
  let reverseStr = "";
  const orginalStr = str;
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str.charAt(i);
  }
  /* 2nd method*/
  const reverseStr2 = orginalStr.split("").reverse().join("");
  console.log("2nd method", reverseStr2);

  return reverseStr;
};
const letterString = (str) => {
  const newStr = [];
  for (let i = 0; i < str.length; i++) {
    const currentCharCode = str[i].charCodeAt(0);
    let fromCharCode = String.fromCharCode(currentCharCode + 1);
    if (["z", "Z"].includes(String.fromCharCode(currentCharCode))) {
      fromCharCode = "a";
    }
    newStr.push(`${str[i]} to ${fromCharCode}`);
  }
  return newStr;
};
const capitalizeTheFirstLetter = (sentence) => {
  sentence = sentence.split(" ");
  for (let i = 0; i < sentence.length; i++) {
    let element = sentence[i];
    element = element.charAt(0).toUpperCase() + element.slice(1);
  }
  return sentence.join(" ");
};
const findLargestWord = (sentence) => {
  const words = sentence.split(" ");

  if (words.length === 0) return "";

  let maxWord = sentence[0];

  for (let i = 1; i < words.length; i++) {
    if (maxWord.length < words[i].length) {
      maxWord = words[i];
    }
  }
  return maxWord;
};

module.exports = {
  reverseString,
  letterString,
  findLargestWord,
  capitalizeTheFirstLetter,
};
