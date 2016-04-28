var UserConstants = require('../constants/user_constants');

ServerActions = {
  fetchCurrentUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  },

};

module.exports = ServerActions;
