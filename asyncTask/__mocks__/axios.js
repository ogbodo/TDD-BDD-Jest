const json = require("./github-repos.json");
const get = function(username) {
  for (var obj of json) {
    if (obj["owner"].login === username) {
      return Promise.resolve(obj);
    }
  }
  return Promise.reject({ error: username + " not found!" });
};

module.exports.get = get;
