var AppDispatcher = require('../dispatcher/dispatcher');
var CommentActions = require('../actions/comment_actions');

var CommentUtils = {
  postComment: function (commentData) {
    $.ajax({
      url: "api/photos/" + commentData.photoId.toString() + "/comments",
      type: "POST",
      data: { comment: {comment_body: commentData.commentBody,
                        photo_id: commentData.photoId }},
      success: function (comment) {
        CommentActions.postComment(comment);
      }
    });
  },

  getComments: function (photoId) {
    $.ajax({
      url: "api/photos/" + photoId + "/comments",
      type: "GET",
      success: function (comments) {
        CommentActions.getComments(comments);
      }
    });
  },

  removeComment: function (commentData) {
    $.ajax({
      url: "api/photos/" + commentData.photoId.toString() + "/comments" + commentData.id,
      type: "DELETE",
      success: function (comment) {
        CommentActions.removeComment(comment.id);
      }
    });
  }

};

module.exports = CommentUtils;
