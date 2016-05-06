var UserConstants = require('../constants/user_constants');
var SearchConstants = require('../constants/search_constants');
var AppDispatcher = require('../dispatcher/dispatcher');

var ServerActions = {
  fetchCurrentUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  },

  // updateSearch: function(query){
  //   AppDispatcher.dispatch({
  //     actionType: SearchConstants.FILTER_PHOTOS,
  //     query: query
  //   });
  // }
};

module.exports = ServerActions;
