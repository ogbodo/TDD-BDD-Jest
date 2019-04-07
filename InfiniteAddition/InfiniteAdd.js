module.exports = function() {
  if (arguments.length < 1) {
    return "No parameter should be empty";
  }
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};
