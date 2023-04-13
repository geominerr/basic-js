const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};

  for (let i = 0; i < domains.length; i++) {
    let partsDomain = domains[i].split(".").reverse();
    let str = "";

    for (let j = 0; j < partsDomain.length; j++) {
      str += `.${partsDomain[j]}`;
      res[str] = res[str] ? res[str] + 1 : 1;
    }
  }

  return res;
}

module.exports = {
  getDNSStats,
};
