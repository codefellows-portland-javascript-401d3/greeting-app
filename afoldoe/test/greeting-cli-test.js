const assert = require( 'chai' ).assert;
var exec = require( 'child_process' ).execSync;

describe( 'greet cli', () => {
	const match = /^Hello Mark!/;

	it( 'greetings', () => {
		var result = exec('node greeting-cli.js Mark').toString();
		assert.match(result, match, 'regexp matches');
	});
});

