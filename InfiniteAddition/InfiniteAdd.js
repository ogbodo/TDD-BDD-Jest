module.exports = function() {
  if (arguments.length < 1) {
    return "No parameter should be empty";
  }
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] instanceof Array) {
      for (var j = 0; j < arguments[i].length; j++) {
        sum += arguments[i][j];
      }
    } else {
      sum += arguments[i];
    }
  }
  return sum;
};
