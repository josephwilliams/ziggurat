var AppDispatcher = require('../dispatcher/dispatcher');
var CommentConstants = require('../constants/comment_constants');
var Store = require('flux/utils').Store;

var CommentStore = new Store(AppDispatcher);
var _comments = [];

CommentStore.all = function () {
  // var comments = [];
  // for (var id in _comments) {
  //   comments.push(_comments[id]);
  // }
  //
  // return comments;

  return _comments.slice();
};

CommentStore.resetComments = function (comments) {
  _comments = [];
  comments.forEach(function(comment){
    _comments[comment.id] = comment;
  });
};

// CommentStore.delete = function (id) {
//   delete _comments[id];
// };

CommentStore.addComment = function (comment) {
  _comments.push(comment);
};

CommentStore.setErrors = function(errors) {
  _errors = errors;
};

CommentStore.errors = function() {
  if (_errors){
    return [].slice.call(_errors);
  }
};

CommentStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case CommentConstants.POST_COMMENT:
      CommentStore.addComment(payload.comment);
      break;
    case CommentConstants.SHOW_ERRORS:
      CommentStore.setErrors(payload.errors);
      break;
    case CommentConstants.ALL_COMMENTS:
      CommentStore.resetComments(payload.comments);
      break;
    case CommentConstants.RECEIVE_COMMENT:
      CommentStore.addComment(payload.comment);
      break;
    case CommentConstants.REMOVE_COMMENT:
      CommentStore.delete(payload.commentId);
      break;
  }
  this.__emitChange();
};

module.exports = CommentStore;
