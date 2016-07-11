var name = require('../get-name');
var assert = require('assert');

describe('name', ()=>{
  it('nameExsts', ()=>{
    var result = name();
    assert.equal(result, 'Danielle');
  });
});
