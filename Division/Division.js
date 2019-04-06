module.exports = function(a, b) {
  if (!a && !b) {
    return "No parameter should be empty";
  }
  if (!a || !b) {
    if (typeof b == "undefined") {
      return "Second parameter should not be empty";
    }
    if (a == 0) {
      return a / b;
    } else {
      return "Denominator cannot be zero";
    }
  }

  if (typeof a !== "number" || typeof b !== "number") {
    return "All Parameters should be number";
  }
  return a / b;
};
