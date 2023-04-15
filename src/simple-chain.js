const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  links: [],

  getLength() {
    return this.links.length;
  },

  addLink(value) {
    if (!arguments.length) {
      this.links.push("()");
    } else {
      this.links.push(value);
    }

    return this;
  },

  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position > this.links.length ||
      position < 1
    ) {
      this.links = [];
      throw new Error("You can't remove incorrect link!");
    }

    for (let i = 0; i <= this.links.length - 1; i += 1) {
      if (i >= position - 1) {
        this.links[i] = this.links[i + 1];
      }
    }
    this.links.pop();

    return this;
  },

  reverseChain() {
    this.links.reverse();

    return this;
  },

  finishChain() {
    let res = this.links.slice(0);
    this.links = [];

    return res.map((e) => `( ${e} )`).join("~~");
  },
};

module.exports = {
  chainMaker,
};
