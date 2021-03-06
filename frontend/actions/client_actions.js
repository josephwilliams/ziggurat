var React = require('react');
var UserUtils = require('../utils/user_utils');
var PhotoUtils = require('../utils/photo_utils');
var CommentUtils = require('../utils/comment_utils');
var LikeUtils = require('../utils/like_utils');
var TagUtils = require('../utils/tag_utils');
var SearchUtils = require('../utils/search_utils');

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

  // CommentActions
  postComment: function (commentData) {
    CommentUtils.postComment(commentData);
  },

  getComments: function (photoId) {
    CommentUtils.getComments(photoId);
  },

  getComment: function (id) {
    CommentUtils.getComment(id);
  },

  removeComment: function (id) {
    CommentUtils.removeComment(id);
  },

  // LikeActions
  createLike: function (data) {
    LikeUtils.createLike(data);
  },

  destroyLike: function (data) {
    LikeUtils.destroyLike(data);
  },

  // TagActions
  fetchTags: function (photoId) {
    TagUtils.fetchTags(photoId);
  },

  allTags: function () {
    TagUtils.allTags();
  },

  createTag: function (tag) {
    TagUtils.createTag(tag);
  },

  removeTag: function (tagId) {
    TagUtils.removeTag(tagId);
  },

  // SearchActions
  filterSearch: function (queryString) {
    SearchUtils.filterSearch(queryString);
  }
};
