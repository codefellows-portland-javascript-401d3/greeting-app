const flip = require('flip-text');

module.exports = function greet(name='friend'){
  var greeting = 'Hello ' + name;
  var upsideDownHello = flip('hello');
  var upsideDownName = flip(name);

  return `${greeting}
  ${upsideDownName} ${upsideDownHello}`;
};
