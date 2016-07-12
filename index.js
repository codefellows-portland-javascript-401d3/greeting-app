var greet = require('./greet');
var name = process.argv.slice(2);

if(name.length > 0){
  for(var i=0; i<name.length; i++){
    console.log(greet(name[i]));
  }
} else {
  console.log(greet('friend'));
}


//get the name(s)
//feed the names into a greeting function
  //return greeting message
//console log out the greeting message
