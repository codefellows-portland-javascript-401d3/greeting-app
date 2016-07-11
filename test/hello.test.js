var hello = require('../hello');
var exec = require('child_process').exec;

describe( 'hello', () => {
  it( 'says hello', () => {
    var result = hello('Jane');
    if (result !== 'Hello, Jane') throw new Error('Add method failed test!');
  });
});

describe( 'greet.js', () => {
  it( 'processes arguments correctly', () => {
    var name = 'Bob';
    exec('node greet.js ' + name, (error, stdout, stderr) => {
      if(error) {
        console.error(`exec error: ${error}`);
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
      } else {
        if (stdout !== 'Hello, ' + name) throw new Error('CLI method failed test!');
      }
    });
  });
});
