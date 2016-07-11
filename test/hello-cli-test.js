var assert = require('assert');
var exec = require('child_process').execSync;

describe('command line interface', function(){
  it('says hello to name entered in cli', function(){
    var result = exec('node hello-cli.js Aaron').toString().replace('\n', '');
    assert.equal(result, 'Hello Aaron!');
  });
});
