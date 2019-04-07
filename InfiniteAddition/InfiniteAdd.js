module.exports = function() {
  if (arguments.length < 1) {
    return "No parameter should be empty";
  }
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (isArray(arguments[i])) {
      sum += sumArrayValues(arguments[i]);
    } else if (typeof arguments[i] === "object" && arguments[i] !== null) {
      for (var index in arguments[i]) {
        sum += arguments[index];
      }
    } else {
      sum += arguments[i];
    }
  }
  return sum;
};
function sumArrayValues(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (isArray(arr[i])) {
      sum += sumArrayValues(arr[i]);
    } else {
      sum += arr[i];
    }
  }
  return sum;
}
function isArray(value) {
  return value instanceof Array;
}
