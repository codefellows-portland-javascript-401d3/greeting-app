var emoji = require('node-emoji');

module.exports = (name,emojiArg) => {
  var result = 'Hello, ' + name;
  if (emojiArg) result += emoji.get(emojiArg);
  return result;
};
