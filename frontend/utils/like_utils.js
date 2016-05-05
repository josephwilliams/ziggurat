var AppDispatcher = require('../dispatcher/dispatcher');
var LikeActions = require('../actions/like_actions');

var LikeUtils = {
  createLike: function (data, success) {
    $.ajax({
      url: "api/likes",
      type: "POST",
      data: { like: data },
      success: function (like) {
        LikeActions.receiveLike(like);
      }
    });
  },

  destroyLike: function (data, success) {
    $.ajax({
      url: "api/likes/" + data.id,
      type: "DELETE",
      data: { like: data },
      success: function (like) {
        LikeActions.removeLike(like);
      }
    });
  }

};

module.exports = LikeUtils;
