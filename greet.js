const emoji = require('emoji-dog');
const names = require('dog-names');
const ascii = require('dog-ascii-faces');

let name1 = names.allRandom();
let name2 = names.allRandom();

module.exports = function greet( name = `${name1}, or is it ${name2}? I can never remember ${ascii()}`) {
  return `${emoji}  hello there ${name}. Sorry to be in such a hurry but I've got to get to the park and sniff a butt. It's been great to see you but I've got to be off! Woof woof!`;
};
