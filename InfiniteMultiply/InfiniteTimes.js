module.exports = function() {
  if (arguments.length < 1) {
    return " parameter should not be empty";
  }
  var multiply = 1;
  for (var i = 0; i < arguments.length; i++) {
    if (isArray(arguments[i])) {
      multiply *= multiplyArrayValues(arguments[i]);
    } else if (typeof arguments[i] === "object" && arguments[i] !== null) {
      multiply *= MultiplyObjectValues(arguments[i]);
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
      multiply *= multiplyArrayValues(arr[i]);
    } else if (typeof arr[i] === "object" && arr[i] !== null) {
      multiply *= MultiplyObjectValues(arr[i]);
    } else {
      multiply *= arr[i];
    }
  }
  return multiply;
}
function MultiplyObjectValues(obj) {
  var multiply = 1;
  for (var index in obj) {
    if (isArray(obj[index])) {
      multiply *= sumArrayValues(obj[index]);
    } else if (typeof obj[index] === "object" && obj[index] !== null) {
      multiply *= sumObjectValues(obj[index]);
    } else {
      multiply *= obj[index];
    }
  }

  return multiply;
}
