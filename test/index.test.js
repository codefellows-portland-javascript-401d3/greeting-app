const exec = require('child_process').execSync;
const assert = require('chai').assert;
const greet = require('../greet');
const emoji = require('emoji-dog');
const names = require('dog-names');
const ascii = require('dog-ascii-faces');

describe ('check for correct output content', () => {
  describe ('- function WITH parameter', () => {
    it ('- output check', () => {
      const greeting = greet('kate');
      assert.equal(greeting, `${emoji}  hello there kate. Sorry to be in such a hurry but I\'ve got to get to the park and sniff a butt. It\'s been great to see you but I\'ve got to be off! Woof woof!`);
    });
  });

  describe ('- function WITHOUT parameter', () => {
    it ('- test output section 1 of 4', () => {
      const greeting = greet();
      assert.include(greeting, `${emoji}  hello there `);
    });

    it ('- test output section 2 of 4', () => {
      const greeting = greet();
      assert.include(greeting, ', or is it ');
    });

    it ('- test output section 3 of 4', () => {
      const greeting = greet();
      assert.include(greeting, '? I can never remember');
    });

    it ('- test output section 4 of 4', () => {
      const greeting = greet();
      assert.include(greeting, 'Sorry to be in such a hurry but I\'ve got to get to the park and sniff a butt. It\'s been great to see you but I\'ve got to be off! Woof woof!');
    });
  });

  describe ('- function WITH parameter via CLI', () => {
    it ('- output check', () => {
      const greeting = exec('node index.js jacob').toString();
      assert.equal(greeting, `${emoji}  hello there jacob. Sorry to be in such a hurry but I\'ve got to get to the park and sniff a butt. It\'s been great to see you but I\'ve got to be off! Woof woof!\n`);
    });
  });
});
