var AppDispatcher = require('../dispatcher/dispatcher');
var PhotoConstants = require('../constants/photo_constants');
var LikeConstants = require('../constants/like_constants');
var Store = require('flux/utils').Store;

var PhotoStore = new Store(AppDispatcher);
var _photos = {};

PhotoStore.all = function () {
  var photos = [];
  for (var id in _photos) {
    photos.push(_photos[id]);
  }

  return photos;
};

PhotoStore.resetPhotos = function (photos) {
  _photos = {};
  photos.forEach(function(photo){
    _photos[photo.id] = photo;
  });
};

PhotoStore.find = function (id) {
  return _photos[id];
};

PhotoStore.delete = function (id) {
  delete _photos[id];
};

// also called on RECEIVE_PHOTO to grab/assess potential changes
PhotoStore.addPhoto = function (photo) {
  _photos[photo.id] = photo;
};

PhotoStore.setErrors = function(errors) {
  _errors = errors;
};

PhotoStore.errors = function() {
  if (_errors){
    return [].slice.call(_errors);
  }
};

PhotoStore.addLike = function(photoId, userId) {
  _photos[photoId].likers.push(parseInt(userId));
  _photos[photoId].like_count += 1;
};

PhotoStore.removeLike = function (photoId, userId) {
  var userIdx = _photos[photoId].likers.indexOf(parseInt(userId));
  _photos[photoId].likers.splice(userIdx, 1);
  _photos[photoId].like_count -= 1;
};

PhotoStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case PhotoConstants.POST:
      PhotoStore.addPhoto(payload.photo);
      break;
    case PhotoConstants.SHOW_ERRORS:
      PhotoStore.setErrors(payload.errors);
      break;
    case PhotoConstants.ALL_PHOTOS:
      PhotoStore.resetPhotos(payload.photos);
      break;
    case PhotoConstants.RECEIVE_PHOTO:
      PhotoStore.addPhoto(payload.photo);
      break;
    case LikeConstants.LIKE_RECEIVED:
      // console.log("received");
      // console.log(payload.like);
      PhotoStore.addLike(payload.like.photoId, payload.like.userId);
      break;
    case LikeConstants.LIKE_REMOVED:
      // console.log("removed:");
      // console.log(payload.like);
      PhotoStore.removeLike(payload.like.photoId, payload.like.userId);
      break;

  }
  PhotoStore.__emitChange();
};

module.exports = PhotoStore;
