var AppDispatcher = require('../dispatcher/dispatcher');
var UserActions = require('../actions/user_actions');

var SessionUtils = {
  login: function (userData) {
    $.ajax({
      url: "/api/session",
      type: "POST",
      data: userData,
      success: function (user){
        UserActions.loginUser(user);
      }
    });
  },

  logout: function (success, error) {
    $.ajax({
      url: "/api/session",
      type: "DELETE",
      success: success,
      error: error
    });
  },

  fetchCurrentUser: function(success, error){
    $.ajax({
      url: "/api/session",
      success: success,
      error: error
    });
  },

};

module.exports = SessionUtils;
