const { fetchUserRepo } = require("./network");

const getUserName = function(username) {
  return fetchUserRepo(username)
    .then(function(repos) {
      return repos;
    })
    .catch(function(err) {
      console.log(err);
    });
};
module.exports.getUserName = getUserName;
