const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;

    for (const value of arr) {
      if (Array.isArray(value)) {
        let count = this.calculateDepth(value) + 1;

        if (count > maxDepth) {
          maxDepth = count;
        }
      }
    }

    return maxDepth;
  }
}

module.exports = {
  DepthCalculator,
};

let calc = new DepthCalculator();

console.log(
  calc.calculateDepth([
    1,
    [8, [[]]],
    [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]],
    2,
    3,
    [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]],
    [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]],
    4,
    5,
    ["6575", ["adas", ["dfg", [0]]]],
  ])
);
