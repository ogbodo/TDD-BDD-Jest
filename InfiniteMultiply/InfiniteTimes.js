module.exports = function() {
  if (arguments.length < 1) {
    return " parameter should not be empty";
  }
  var multiply = 1;
  for (var i = 0; i < arguments.length; i++) {
    if (isArray(arguments[i])) {
      multiply *= multiplyArrayValues(arguments[i]);
    } else multiply *= arguments[i];
  }
  return multiply;
};
function isArray(value) {
  return value instanceof Array;
}
function multiplyArrayValues(arr) {
  var multiply = 1;
  for (var i = 0; i < arr.length; i++) {
    if (isArray(arr[i])) {
      multiply *= sumArrayValues(arr[i]);
    } else if (typeof arr[i] === "object" && arr[i] !== null) {
      multiply *= sumObjectValues(arr[i]);
    } else {
      multiply *= arr[i];
    }
  }
  return multiply;
}
