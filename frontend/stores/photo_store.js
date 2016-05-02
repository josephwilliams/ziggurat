var AppDispatcher = require('../dispatcher/dispatcher');
var PhotoConstants = require('../constants/photo_constants');
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

PhotoStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case PhotoConstants.POST:
      PhotoStore.addPhoto(payload.photoData);
      break;
    case PhotoConstants.SHOW_ERRORS:
      PhotoStore.setErrors(payload.errors);
      break;
    case PhotoConstants.ALL_PHOTOS:
      PhotoStore.resetPhotos(payload.photos);
      break;
  }
  this.__emitChange();
};

module.exports = PhotoStore;
