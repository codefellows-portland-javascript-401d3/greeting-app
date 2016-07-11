var greeting = require( '../greeting' );
var assert = require('assert');

describe( 'greetings', () => {

	it( 'shows greeting', () => {
		assert.equal( greeting('Arielle'), 'Hello Arielle!' );
	});

});