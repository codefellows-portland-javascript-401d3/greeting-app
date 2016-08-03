const readline = require('readline');

module.exports = function question(){
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Do you like the upside down greeting?', (answer) => {
    console.log('We appreciate your feedback:', answer);
    rl.close();
  });
};
