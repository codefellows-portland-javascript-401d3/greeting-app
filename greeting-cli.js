//access to starwars and greeting modules
const greeting = require('./greeting');
const starwars = require('starwars');


var result = greeting(process.argv[2]);

//displays greeting in the console/terminal
console.log(result);

