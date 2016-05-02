var React = require('react');
var UserUtils = require('../utils/user_utils');
var PhotoUtils = require('../utils/photo_utils');

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
  },

  // PhotoActions

  postPhoto: function (photoData) {
    PhotoUtils.postPhoto(photoData);
  },

  getPhotos: function () {
    PhotoUtils.getPhotos();
  },

  getPhoto: function (id) {
    PhotoUtils.getPhoto(id);
  }

};
