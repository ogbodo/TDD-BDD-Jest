module.exports = function(str1, str2) {
  if (!str1 && !str2) {
    return "No parameter should be empty";
  }
  return str1 + str2;
};
