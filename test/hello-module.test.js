var assert = require('assert');
var helloModule = require('../hello-module');

describe('hello-module', function() {
  it('says hello to name param that is passed in', function(){
    var result = helloModule('Aaron');
    assert.equal(result, 'Hello Aaron!');
  });
});
