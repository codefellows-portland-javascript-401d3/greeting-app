var hello = require('../hello');
var exec = require('child_process').exec;
var assert = require('assert');

describe('hello', () => {
  it('says hello', () => {
    var result = hello('Jane');
    if (result !== 'Hello, Jane') throw new Error('Hello method failed test!');
  });

  it('displays an emoji at the end', () => {
    var result = hello('Jane','heart');
    if (result !== 'Hello, Jane❤️') throw new Error('Hello with emoji method failed test!');
  });
});

describe('greet.js', () => {
  it('processes arguments correctly', (done) => {
    var name = 'Bob';
    exec('node greet.js ' + name, (error, stdout, stderr) => {
      if(error) {
        done(error);
        console.error(`exec error: ${error}`);
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
      } else {
        assert.equal(stdout, 'Hello, ' + name + '\n');
        done();
      }
    });
  });
});
