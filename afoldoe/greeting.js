//access to starwars module
const starwars = require('starwars');

//displays a greeting and a random Star Wars quote
module.exports = function greeting(name) {
	return 'Hello ' + name + '! Here is a bomb Star Wars quote: ' + `${starwars()}`;
};
