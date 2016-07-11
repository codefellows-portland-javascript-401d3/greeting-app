var name = require('../get-name');
var assert = require('assert');

describe('name', ()=>{
  it('fallback name', ()=>{
    var result = name();
    assert.equal(result, 'friend');
  });
});
