module.exports = exports;

var colors = require('colors');

exports.greet = function(name, color) {

    if (color) return colors[color]('Hello, ' + name + '.');
    else return 'Hello, ' + name + '.';
};
