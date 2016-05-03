var React = require('react');
var UserUtils = require('../utils/user_utils');
var PhotoUtils = require('../utils/photo_utils');
var CommentUtils = require('../utils/comment_utils');

module.exports = {
  // ServerActions
  fetchCurrentUser: function () {
    UserUtils.fetchCurrentUser();
  },

  // UserActions
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
  },

  // LikeActions
  likePhoto: function (photoId) {
    PhotoUtils.likePhoto(photoId);
  },

  unlikePhoto: function (photoId) {
    PhotoUtils.unlikePhoto(photoId);
  },

  // CommentActions
  postComment: function (commentData) {
    CommentUtils.postPhoto(commentData);
  },

  getComments: function () {
    CommentUtils.getComments();
  },

  getComment: function (id) {
    CommentUtils.getComment(id);
  },

  removeComment: function (id) {
    CommentUtils.removeComment(id);
  }

};
