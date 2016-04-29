var AppDispatcher = require('../dispatcher/dispatcher');
var UserActions = require('../actions/user_actions');

var UserUtils = {

  loginUser: function (user){
    $.ajax({
      url: "api/session",
      type: "POST",
      data: user,
      success: function (user) {
        UserActions.loginUser(user);
      }
    });
  },

  logoutUser: function () {
    $.ajax({
      url: "api/session",
      type: "DELETE",
      success: function () {
        UserActions.logoutUser();
      }
    });
  },

  createUser: function (user) {
    $.ajax({
      url: "api/users",
      type: "POST",
      data: {user: user},
      success: function (user) {
        UserActions.loginUser(user);
      },
      error: function (errors){
        UserActions.showErrors(errors);
      }
    });
  },

  fetchCurrentUser: function (user) {
    $.ajax({
      url: "api/session",
      type: "GET",
      success: function (user) {
        if (user){
          UserActions.loginUser(user);
        }
      }
    });
  }

};

module.exports = UserUtils;
