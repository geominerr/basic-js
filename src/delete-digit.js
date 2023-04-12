const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {
  let str = number.toString();
  let maxNumber = str.substring(1);

  for (let i = 1; i < str.length; i += 1) {
    let currentNumber = str.substring(0, i) + str.substring(i + 1);

    if (parseInt(currentNumber) > parseInt(maxNumber)) {
      maxNumber = currentNumber;
    }
  }

  return parseInt(maxNumber);
}

module.exports = {
  deleteDigit,
};
