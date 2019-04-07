module.exports = function(a, b) {
  if (arguments.length > 2) {
    return "More arguments than expected";
  }
  if (!(a && b)) {
    return "No parameter should be empty";
  }
  if (typeof a !== "number" || typeof b !== "number") {
    return "All Parameters should be number";
  }
  return parseFloat((a + b).toFixed(4));
};
