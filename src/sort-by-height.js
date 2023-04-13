const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sortedArr = arr.filter((el) => el != -1).sort((a, b) => a - b);

  if (sortedArr.length == arr.length) {
    return sortedArr;
  } else {
    let newArr = arr.map((el) => {
      if (el !== -1) {
        return "change";
      } else {
        return el;
      }
    });

    for (let i = 0; i < sortedArr.length; i += 1) {
      for (let j = 0; j < newArr.length; j += 1) {
        if (newArr[j] == "change") {
          newArr[j] = sortedArr[i];

          break;
        }
      }
    }

    return newArr;
  }
}

module.exports = {
  sortByHeight,
};

console.log(sortByHeight([11, 16, 2, 2, 4]));
