const json = require("./github-repos.json");
const get = function(username) {
  var repos = [];
  for (var obj of json) {
    if (obj["owner"].login === username) {
      repos.push(obj);
    }
    if (repos.length == 5) break;
  }
  if (repos.length > 0) {
    return Promise.resolve(repos);
  }
  return Promise.reject({ error: username + " not found!" });
};

module.exports.get = get;
