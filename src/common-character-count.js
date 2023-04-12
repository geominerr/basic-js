const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  const arr1 = str1.split("");
  const arr2 = str2.split("");
  let count = 0;

  for (let i = 0; i < arr1.length; i += 1) {
    for (let j = 0; j < arr2.length; j += 1) {
      if (arr1[i] === arr2[j]) {
        arr2[j] = null;
        count += 1;
        break;
      }
    }
  }
  console.log(arr2);
  return count;
}

module.exports = {
  getCommonCharacterCount,
};

console.log(getCommonCharacterCount("abca", "xyzbac"));
