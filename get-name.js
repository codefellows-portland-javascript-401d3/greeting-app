module.exports = function getName(name){
  //name = 'Danielle';
  name = process.argv[2] || 'friend';
  return name;
};
