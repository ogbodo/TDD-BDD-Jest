module.exports = function(a, b) {
  if (arguments.length > 2) {
    return "More arguments than expected";
  }
  if (!a && !b) {
    if (a == 0 || b == 0) {
      if (b == 0) {
        return "Denominator cannot be zero";
      }
    }
    return "No parameter should be empty";
  }
  if (!a || !b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return "All Parameters should be number";
    }
    if (a == 0) {
      return parseFloat((a / b).toFixed(4));
    } else {
      return "Denominator cannot be zero";
    }
  }

  if (typeof a !== "number" || typeof b !== "number") {
    return "All Parameters should be number";
  }
  return parseFloat((a / b).toFixed(4));
};
