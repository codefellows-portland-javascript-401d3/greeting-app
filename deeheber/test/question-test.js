const exec = require( 'child_process' ).execSync;
const assert = require('chai').assert;

describe('question', ()=>{

  const question = 'Do you like the upside down greeting?';

  it('make sure question was asked', ()=>{
    var greeting = exec('node index.js').toString();
    assert.include(greeting, question);
  });
});
