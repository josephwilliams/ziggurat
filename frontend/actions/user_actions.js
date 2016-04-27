var AppDispatcher = require('../dispatcher/dispatcher');
var SessionConstants = require('../constants/session_constants');

UserActions = {

  loginUser: function(user) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      user: user
    });
  },

  logoutUser: function(){
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT,
    });
  },

  // create user causes user login via SessionStore;
  // needs another call to UserStore for creation of a user
  // createUser: function(user){
  //   AppDispatcher.dispatch({
  //     actionType: SessionConstants.SIGNUP,
  //     user: user
  //   });
  // },

  fetchCurrentUser: function() {
    AppDispatcher.dispatch({
      actionType: SessionConstants.CURRENT_USER,
    });
  },

  persistUser: function(user){
    AppDispatcher.dispatch({
      actionType: SessionConstants.PERSIST_USER,
      user: user
    });
  },

  showErrors: function(errors){
    AppDispatcher.dispatch({
      actionType: SessionConstants.SHOW_ERRORS,
      errors: errors.responseJSON.errors
    });
  },


};

module.exports = UserActions;
