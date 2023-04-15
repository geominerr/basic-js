const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(arg) {
    this.type = arg ?? true;
  }

  encrypt(mes, key) {
    if (!mes || !key) {
      throw new Error("Incorrect arguments!");
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const mesEncrypt = [];
    mes = mes.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, k = 0; i < mes.length; i += 1) {
      if (k >= key.length) {
        k = 0;
      }

      if (alphabet.includes(mes[i])) {
        mesEncrypt[i] =
          alphabet[(alphabet.indexOf(mes[i]) + alphabet.indexOf(key[k])) % 26];
        k += 1;
      } else {
        mesEncrypt[i] = mes[i];
      }
    }

    return this.type ? mesEncrypt.join("") : mesEncrypt.reverse().join("");
  }
  decrypt(mes, key) {
    if (!mes || !key) {
      throw new Error("Incorrect arguments!");
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const mesDecrypt = [];
    mes = mes.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, k = 0; i < mes.length; i += 1) {
      if (k >= key.length) {
        k = 0;
      }

      if (alphabet.includes(mes[i])) {
        mesDecrypt[i] =
          alphabet[
            (alphabet.indexOf(mes[i]) - alphabet.indexOf(key[k])) % 26
          ] ||
          alphabet[
            (alphabet.indexOf(mes[i]) - alphabet.indexOf(key[k]) + 26) % 26
          ];
        k += 1;
      } else {
        mesDecrypt[i] = mes[i];
      }
    }

    return this.type ? mesDecrypt.join("") : mesDecrypt.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
