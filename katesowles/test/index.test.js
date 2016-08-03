const exec = require('child_process').execSync;
const assert = require('chai').assert;
const greet = require('../greet');
const emoji = require('emoji-dog');
const names = require('dog-names');
const ascii = require('dog-ascii-faces');

describe ('input / output checks', () => {
  describe ('- specific input', () => {
    it ('- test 1/1', () => {
      const greeting = greet('kate');
      assert.equal(greeting, `${emoji}  hello there kate. Sorry to be in such a hurry but I\'ve got to get to the park and sniff a butt. It\'s been great to see you but I\'ve got to be off! Woof woof!`);
    });
  });

  describe ('- no input', () => {
    it ('- test 1/4', () => {
      const greeting = greet();
      assert.include(greeting, `${emoji}  hello there `);
    });

    it ('- test 2/4', () => {
      const greeting = greet();
      assert.include(greeting, ', or is it ');
    });

    it ('- test 3/4', () => {
      const greeting = greet();
      assert.include(greeting, '? I can never remember');
    });

    it ('- test 4/4', () => {
      const greeting = greet();
      assert.include(greeting, 'Sorry to be in such a hurry but I\'ve got to get to the park and sniff a butt. It\'s been great to see you but I\'ve got to be off! Woof woof!');
    });
  });

  describe ('- CLI input', () => {
    it ('- test 1/1', () => {
      const greeting = exec('node index.js jacob').toString();
      assert.equal(greeting, `${emoji}  hello there jacob. Sorry to be in such a hurry but I\'ve got to get to the park and sniff a butt. It\'s been great to see you but I\'ve got to be off! Woof woof!\n`);
    });
  });
});

describe ('integration checks', () => {
  it ('- dog-names', () => {
    let name1 = names.allRandom();
    let name2 = names.allRandom();
    assert.include(`${names.all}`, `${name1}`, 'please check dog-names integration');
    assert.include(`${names.all}`, `${name2}`, 'please check dog-names integration');
  });

  it ('- emoji-dog', () => {
    assert.deepEqual(`${emoji}`, '🐶', 'please check emoji-dog integration');
  });

  it ('- dog-ascii-faces', () => {
    assert.ok(`${ascii}`, 'please check dog-ascii-faces integration');
  });
});
