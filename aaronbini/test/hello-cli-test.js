const assert = require('chai').assert;
const exec = require('child_process').execSync;
const emoji = require('node-emoji');

describe('command line interface', function(){
  it('says hello to name entered in cli', function(){
    let result = exec('node hello-cli.js Aaron').toString()/*.replace('\n', '')*/;
    assert.equal(result, 'Hello Aaron! Care for a cup of coffee? ' + emoji.get('coffee') + '\n');
  });
});
