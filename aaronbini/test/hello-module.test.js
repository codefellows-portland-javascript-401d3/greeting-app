const assert = require('chai').assert;
const helloModule = require('../hello-module');

describe('hello-module', function() {
  it('says hello to name param that is passed in', function(){
    let result = helloModule('Aaron');
    assert.equal(result, 'Hello Aaron!');
  });
});
