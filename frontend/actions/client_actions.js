var React = require('react');
var UserUtils = require('../utils/user_utils.js');

module.exports = {
  fetchCurrentUser: function () {
    UserUtils.fetchCurrentUser();
  },

  loginUser: function (user) {
    UserUtils.loginUser(user);
  },

  logoutUser: function () {
    UserUtils.logoutUser();
  },

  createUser: function (user, closeModalCB) {
    UserUtils.createUser(user, closeModalCB);
  }
};
