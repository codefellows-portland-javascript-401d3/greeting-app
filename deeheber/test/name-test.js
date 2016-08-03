const greet = require('../greet');
const assert = require('chai').assert;

describe('test function', ()=>{

  const match = /^Hello friend/;

  it('friend', ()=>{
    var greeting = greet();
    assert.match(greeting, match);
    assert.ok(greeting.replace( match, '' ).trim());
  });
});
