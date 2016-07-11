var assert = require( 'assert' );
var exec = require( 'child_process' ).execSync;

describe( 'greet cli', () => {
	it( 'greetings', () => {
		var result = exec('node greet.js Mark').toString();
		assert.equal( result, 'Hello Mark!\n' );
	});
});

