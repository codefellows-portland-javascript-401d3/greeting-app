const greet = require('./greet');
const question = require('./question');

//gather names
var name = process.argv.slice(2);

//greet each name
if(name.length > 0){
  for(var i=0; i<name.length; i++){
    console.log(greet(name[i]));
  }
} else {
  console.log(greet());
}

//ask follow up question
question();
