var greet = require('../greet');
var assert = require('assert');

describe('name', ()=>{
  it('name function', ()=>{
    var name = 'Bob';
    var result = greet(name);
    assert.equal(result, 'Hello Bob');
  });
});
