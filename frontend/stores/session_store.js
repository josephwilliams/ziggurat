var AppDispatcher = require('../dispatcher/dispatcher');
var SessionConstants = require('../constants/user_constants');
var Store = require('flux/utils').Store;

var SessionStore = new Store(AppDispatcher);

var _currentUser, _errors;

SessionStore.login = function(user) {
  _currentUser = user;
  // $.extend(_currentUser, user);

  _errors = null;
};

SessionStore.logout = function() {
  _currentUser = null;
  _errors = null;
};

SessionStore.currentUser = function() {
  if (_currentUser) {
    return _currentUser;
  	// return $.extend({}, _currentUser);
  }
};

SessionStore.persistUser = function() {

};

SessionStore.setErrors = function(errors) {
  _errors = errors;
};

SessionStore.errors = function() {
  if (_errors){
    return [].slice.call(_errors);
  }
};

SessionStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case SessionConstants.LOGIN:
      SessionStore.login(payload.user);
      break;
    case SessionConstants.LOGOUT:
      SessionStore.logout();
      break;
    case SessionConstants.ERROR:
      SessionStore.setErrors(payload.errors);
      break;
    case SessionConstants.LOGIN:
      SessionStore.login(payload.user);
      break;
    case SessionConstants.CURRENT_USER:
      SessionStore.currentUser();
      break;
    case "PERSIST_USER":
      SessionStore.persistUser();
      break;
  }
  SessionStore.__emitChange();
};

module.exports = SessionStore;
