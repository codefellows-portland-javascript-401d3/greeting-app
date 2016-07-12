var exec = require( 'child_process' ).execSync;
var assert = require('assert');

describe( 'cli', () => {
  it( 'Test single name', () => {
    var result = exec('node index.js Danielle').toString();
    assert.equal(result, 'Hello Danielle\n');
  });

  it( 'Test multiple names', () => {
    var result = exec('node index.js Jane Joe Tom Bill').toString();
    assert.equal(result, 'Hello Jane\nHello Joe\nHello Tom\nHello Bill\n');
  });
});
