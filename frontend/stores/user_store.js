var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/user_constants');
var Store = require('flux/utils').Store;

var UserStore = new Store(AppDispatcher);

var _users = [];

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "CREATE_USER":
      UserStore.createUser(payload.user);
      break;
    case "ERROR":
      UserStore.setErrors(payload.errors);
      break;
  }
  UserStore.__emitChange();
};

UserStore.createUser = function(user) {
  _users.push(user);
};

UserStore.setErrors = function(errors) {
  _errors = errors;
};

UserStore.errors = function() {
  if (_errors){
    return [].slice.call(_errors);
  }
};

module.exports = UserStore;
