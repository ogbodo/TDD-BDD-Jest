module.exports = function() {
  var multiply = 1;
  for (var i = 0; i < arguments.length; i++) {
    multiply *= arguments[i];
  }
  return multiply;
};
