const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = String(str);
  const addition = String(
    options.addition !== undefined ? options.addition : ""
  );

  if (!options.repeatTimes) {
    res += addition;
  }

  for (let i = 0; i < options.repeatTimes; i += 1) {
    if (i !== 0) {
      res += str;
    }
    res += addition;

    for (let j = 1; j < options.additionRepeatTimes; j += 1) {
      res += options.additionSeparator || "|";

      res += addition;
    }

    if (i < options.repeatTimes - 1) {
      res += options.separator || "+";
    }
  }

  return res;
}

module.exports = {
  repeater,
};
