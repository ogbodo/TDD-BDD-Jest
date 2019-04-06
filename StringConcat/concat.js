module.exports = function(str1, str2) {
  if (!str1 && !str2) {
    return "No parameter should be empty";
  }
  if (!str1 || !str2) {
    if (typeof str1 !== "string" || typeof str2 !== "string") {
      return "All Parameters should be number";
    }
  }
  return str1 + str2;
};
