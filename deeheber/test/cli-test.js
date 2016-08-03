const exec = require( 'child_process' ).execSync;
const assert = require('chai').assert;

describe( 'cli', () => {

  const matchDanielle = /^Hello Danielle/;

  it( 'Test single name', () => {
    var greeting = exec('node index.js Danielle').toString();
    assert.match(greeting, matchDanielle);
    assert.ok(greeting.replace(matchDanielle, '' ).trim());
  });

  // it( 'Test multiple names', () => {
  //   var result = exec('node index.js Jane Joe Tom Bill').toString();
  //   assert.equal(result, 'Hello Jane\nHello Joe\nHello Tom\nHello Bill\n');
  // });
});
