var greet = require('./greet');

// console.log(
//     greet.greet(
//       process.argv[2]
//     )
// );

//I want to try to be tolerant of user input and allow them to type an arbitrarily long name into the command line without enclosing it in a string. Here's an attempt at that:

var CLIString = process.argv.slice([3]).join(' ');

console.log(
    greet.greet(
      CLIString, process.argv[2]
    )
);

//TODO: Refactor CLI so that the program explains formatting for user input and then allows user input to match.
