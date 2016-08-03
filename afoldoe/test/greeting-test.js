var greeting = require( '../greeting' );
const assert = require( 'chai' ).assert;

describe( 'greetings', () => {
	const match = /^Hello/;
	const greet = greeting('Arielle');
	
	it( 'greeting', () => {
		assert.match(greet, match, 'regexp matches');
	});

	it( 'no name greeting', () => {
		const greet = greeting();
		assert.match( greet, /^Hello undefined!/ );
	});

});