var greet = require('../greet');
var assert = require('assert');

describe('My First Tests', function() {
    it('Can successfully incorporate "Nancy" ', function() {
        assert.equal(
          greet.greet('Nancy') , 'Hello, Nancy.'
        );
    });
});
