const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  let res = 0;
  const katEyes = "^^";

  for (const subArr of arr) {
    for (const value of subArr) {
      if (value === katEyes) {
        res += 1;
      }
    }
  }

  return res;
}

module.exports = {
  countCats,
};
