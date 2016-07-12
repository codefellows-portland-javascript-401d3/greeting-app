var name = require('../get-name');
var assert = require('assert');

describe('name', ()=>{
  it('name function', ()=>{
    var result = name();
    assert.equal(result, 'friend');
  });
});
