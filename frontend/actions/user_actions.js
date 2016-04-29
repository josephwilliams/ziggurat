var AppDispatcher = require('../dispatcher/dispatcher');
var SessionConstants = require('../constants/session_constants');

var UserActions = {

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
