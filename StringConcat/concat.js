module.exports = function(str1, str2) {
  if (arguments.length > 2) {
    return "More arguments than expected";
  }
  if (!str1 && !str2) {
    return "No parameter should be empty";
  }
  if (!str1 || !str2) {
    if (typeof str1 !== "string" || typeof str2 !== "string") {
      return "All Parameters should be string";
    }
  }
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    return "All Parameters should be string";
  }
  return str1 + str2;
};
