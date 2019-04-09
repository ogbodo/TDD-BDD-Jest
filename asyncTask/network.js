const axios = require("./__mocks__/axios");
const fetchUserRepo = function(username) {
  return axios
    .get(username)
    .then(function(userRepo) {
      return userRepo;
    })
    .catch(function(err) {
      console.log("Error");
    });
};
module.exports.fetchUserRepo = fetchUserRepo;
