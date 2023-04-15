const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const hint = [
    "--double-next",
    "--discard-prev",
    "--discard-next",
    "--double-prev",
  ];
  const res = arr.slice(0);

  for (let i = 0; i < res.length; i += 1) {
    switch (res[i]) {
      case hint[0]:
        res[i] = res[i + 1];
        break;
      case hint[1]:
        res[i - 1] = "empty-cell";
        break;
      case hint[2]:
        res[i + 1] = "empty-cell";
        break;
      case hint[3]:
        res[i] = res[i - 1];
    }
  }

  return res.filter((el) => el !== "empty-cell" && !hint.includes(el) && el);
}

module.exports = {
  transform,
};

console.log(transform([1, 2, 3, "--discard-prev", 4, 5]));
