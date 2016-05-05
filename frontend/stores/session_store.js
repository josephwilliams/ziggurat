var AppDispatcher = require('../dispatcher/dispatcher');
var SessionConstants = require('../constants/user_constants');
var LikeConstants = require('../constants/like_constants');
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

SessionStore.setErrors = function(errors) {
  _errors = errors;
};

SessionStore.errors = function() {
  if (_errors){
    return [].slice.call(_errors);
  }
};

SessionStore.addLike = function(photoId) {
  _currentUser.liked_photos.push(parseInt(photoId));
};

SessionStore.removeLike = function (photoId) {
  var photoIdx = _currentUser.liked_photos.indexOf(parseInt(photoId));
  _currentUser.liked_photos.splice(photoIdx, 1);
};


SessionStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case SessionConstants.LOGIN:
      SessionStore.login(payload.user);
      break;
    case SessionConstants.LOGOUT:
      SessionStore.logout();
      break;
    case SessionConstants.CURRENT_USER:
      SessionStore.currentUser();
      break;
    case SessionStore.PERSIST_USER:
      SessionStore.persistUser();
      break;
    case SessionConstants.SHOW_ERRORS:
      SessionStore.setErrors(payload.errors);
      break;
    case LikeConstants.LIKE_RECEIVED:
      SessionStore.addLike(payload.like.photoId);
      break;
    case LikeConstants.LIKE_REMOVED:
      SessionStore.removeLike(payload.like.photoId);
      break;
  }
  SessionStore.__emitChange();
};

module.exports = SessionStore;
