var React = require('react');
var UserUtils = require('../utils/user_utils.js');

module.exports = {
  fetchCurrentUser: function () {
    UserUtils.fetchCurrentUser();
  },

  loginUser: function (user) {
    UserUtils.loginUser(user);
  },

  logoutUser: function (user) {
    UserUtils.logoutUser(user);
  },

  createUser: function (user) {
    UserUtils.createUser(user);
  }
};
