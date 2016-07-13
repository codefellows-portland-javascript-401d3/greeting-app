const prompt = require('prompt');
const colors = require('colors/safe');

const schema = {
  properties: {
    name: {
      pattern: /^[a-zA-Z\s\-]+$/,
      description: colors.blue('Please enter a username:'),
      message: 'Name must be only letters, spaces, or dashes',
      required: true
    },
    password: {
      pattern: /^\w+$/,
      description: colors.green('Now please select a super secret password: '),
      message: 'Password must contain only letters, numbers, and underscores',
      required: true,
      hidden: true
    },
    annoyance: {
      pattern: /^[1-5]{1}$/,
      description: colors.yellow('On a scale of 1 to 5, how annoyed are you with this prompt sequence?'),
      message: 'This must be any integer from 1 to 5',
      required: true
    }
  }
};

const schema2 = {
  properties: {
    password2: {
      pattern: /^\w+$/,
      description: colors.red('Last thing, I promise! Please verify your password'),
      message: 'Password must contain only letters, numbers, and underscores',
      required: true,
      hidden: true
    }
  }
};

prompt.message = colors.yellow('Hey You!');
prompt.delimiter = colors.green('=>');

prompt.start();

module.exports = function promptSequence() => {
  prompt.get(schema, (err, result) => {
    if (+result.annoyance === 1 || +result.annoyance ===2) {
      console.log(`A ${result.annoyance}? That's not too bad!`);
    } else if (+result.annoyance === 3 || +result.annoyance === 4) {
      console.log('Ok, I could tell you were getting frustrated.');
    } else {
      console.log(`A ${result.annoyance}? I'm sorry, it was only a few questions!`);
    }
    let password = result.password;
    let name = result.name;

    prompt.get(schema2, (err, result) => {
      if (result.password2 === password) {
        console.log('Thank you', name, '! That is correct, you now have access to the super secret files!');
      } else {
        console.log('Sorry those passwords do not match, goodbye', name);
      }
    });
  });
// };
