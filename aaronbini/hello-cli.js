const helloThere = require('./hello-module');
const emoji = require('node-emoji');
const result = helloThere(process.argv[2]) + ' Care for a cup of coffee? ' + emoji.get('coffee');
console.log(result);
