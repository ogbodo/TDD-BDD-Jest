module.exports = function(a, b) {
  if (!(a && b)) {
    return "No parameter should be empty";
  }
  return a * b;
};
