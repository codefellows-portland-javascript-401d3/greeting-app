var exec = require('child_process').execSync;
var assert = require('assert');
var greet = require('../greet');

describe ('testing output', () => {
  it ('- specific', () => {
    assert.equal(greet('kate'), 'hello, kate');
  });

  it ('- no input', () => {
    assert.equal(greet(), 'hello, nameless creature');
  });

  it ('- CLI(ish)', () => {
    var result = exec('node index.js kate').toString();
    assert.equal(result, 'hello, kate\n');
  });
});
