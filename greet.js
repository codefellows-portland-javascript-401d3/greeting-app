module.exports = function greet(name){
  name = process.argv[2] || 'friend';
  return name;
};
