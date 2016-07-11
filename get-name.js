module.exports = function getName(name){
  name = process.argv[2] || 'friend';
  return name;
};
