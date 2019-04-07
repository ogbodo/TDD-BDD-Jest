module.exports = function() {
  if (arguments.length < 1) {
    return " parameter should not be empty";
  }
  var multiply = 1;
  for (var i = 0; i < arguments.length; i++) {
    multiply *= arguments[i];
  }
  return multiply;
};
