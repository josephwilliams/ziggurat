var CommentConstants = require('../constants/comment_constants');

var CommentActions = {
  postComment: function(comment){
    AppDispatcher.dispatch({
      actionType: CommentConstants.POST,
      comment: comment
    });
  },

  getComments: function(comments){
    AppDispatcher.dispatch({
      actionType: CommentConstants.ALL_COMMENTS,
      comments: comments
    });
  },

  showErrors: function(errors){
    AppDispatcher.dispatch({
      actionType: CommentConstants.SHOW_ERRORS,
      errors: errors.responseJSON.errors
    });
  },

  receiveComment: function(comment){
    AppDispatcher.dispatch({
      actionType: CommentConstants.RECEIVE_COMMENT,
      comment: comment
    });
  },

  removeComment: function(commentId){
    AppDispatcher.dispatch({
      actionType: CommentConstants.REMOVE_COMMENT,
      commentId: commentId
    });
  },
};

module.exports = CommentActions;
