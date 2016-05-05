var AppDispatcher = require('../dispatcher/dispatcher');
var LikeConstants = require('../constants/like_constants');

var LikeActions = {

  receiveLike: function(like){
    AppDispatcher.dispatch({
      actionType: LikeConstants.LIKE_RECEIVED,
      like: like
    });
  },

  removeLike: function(like){
    AppDispatcher.dispatch({
      actionType: LikeConstants.LIKE_REMOVED,
      like: like
    });
  }
};

module.exports = LikeActions;
