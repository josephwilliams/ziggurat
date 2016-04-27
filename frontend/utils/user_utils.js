var AppDispatcher = require('../dispatcher/dispatcher');
var UserActions = require('../actions/user_actions');

UserUtils = {

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
      }
    });
  },

  checkUser: function (user) {
    $.ajax({
      url: "api/session",
      success: function (user) {

      }
    });
  }

};

module.exports = UserUtils;
