//var name = require('../get-name');
var exec = require( 'child_process' ).execSync;
var assert = require('assert');

describe( 'cli', () => {
  it( 'Test name', () => {
    var result = exec('node index.js Danielle').toString();
    assert.equal(result, 'Hello Danielle\n');
  });
});
