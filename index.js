var greet = require('./greet');
var name = process.argv.slice(2);

if(name.length > 0){
  console.log(greet(name));
} else {
  console.log(greet('friend'));
}



//get the name(s)
//feed the names into a greeting
  //return greeting
//console log out the greeting
