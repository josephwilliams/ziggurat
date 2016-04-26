var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/user_constants');

var UserStore = new Store(AppDispatcher);
var _users = {};

UserStore.all = function () {
  var users = [];
  for (var id in _users) {
    users.push(_users[id]);
  }

  return users;
};

UserStore.removeUser = function (user) {
  delete _users[user.id];
};

UserStore.setUser = function (user) {
  _users[user.id] = user;
};

UserStore.resetUsers = function (users) {
  _users = {};
  users.forEach(function(user) {
    _users[user.id] = user;
  });
};

UserStore.find = function (id) {
  return _users[id];
};

// dispatch
Store.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case UserConstants.RECEIVE_USERS:
      Store.resetUsers(payload.users);
      break;

  }
  this.__emitChange();
};

// export
module.exports = UserStore;
