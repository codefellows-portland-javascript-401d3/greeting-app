const assert = require('chai').assert;
const exec = require('child_process').execSync;
const cliPrompt = require('../hello-cli-prompt');


//don't know how to set up this test
describe('command-line prompt', function() {
  const nameValidation = /^[a-zA-Z\s\-]+$/;
  const passwordValidation = /^\w+$/;
  const annoyanceValidation = /^[1-5]{1}$/;

  it('accepts user input', function(){

  });
  it('responds differently to the user based on input', function(){

  });
  it('validates user input with regex', function(){

  });
});
