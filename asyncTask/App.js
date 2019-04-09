const { fetchUserRepo } = require("./network");

const getUserName = function(username) {
  return fetchUserRepo(username)
    .then(function(repo) {
      return repo["owner"].login;
    })
    .catch(function(err) {
      console.log(err);
    });
};
module.exports.getUserName = getUserName;
