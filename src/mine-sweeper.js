const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  console.log(rows, cols);
  const res = new Array(rows).fill(1).map((e) => {
    return new Array(cols).fill(0);
  });

  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      for (let dX = -1; dX <= 1; dX += 1) {
        for (let dY = -1; dY <= 1; dY += 1) {
          const x = i + dX;
          const y = j + dY;

          if (
            x >= 0 &&
            x < rows &&
            y >= 0 &&
            y < cols &&
            !(dX === 0 && dY === 0)
          ) {
            if (matrix[x][y]) {
              res[i][j] += 1;
            }
          }
        }
      }
    }
  }

  console.log(res);
  return res;
}

module.exports = {
  minesweeper,
};
