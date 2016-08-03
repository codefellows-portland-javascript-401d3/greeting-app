//access to starwars and greeting modules
const greeting = require('./greeting');
const starwars = require('starwars');


//displays greeting in the console
if(process.argv[2]) {
	var result = greeting(process.argv[2]);
	console.log(result);
} else {
	console.log('Please add a name');
};




