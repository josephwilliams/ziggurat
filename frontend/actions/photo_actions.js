var AppDispatcher = require('../dispatcher/dispatcher');
var PhotoConstants = require('../constants/photo_constants');

var PhotoActions = {
  postPhoto: function(photo) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.POST,
      photo: photo
    });
  },

  getPhotos: function(photos){
    AppDispatcher.dispatch({
      actionType: PhotoConstants.ALL_PHOTOS,
      photos: photos
    });
  },

  showErrors: function(errors){
    AppDispatcher.dispatch({
      actionType: PhotoConstants.SHOW_ERRORS,
      errors: errors.responseJSON.errors
    });
  },

  receivePhoto: function(photo){
    AppDispatcher.dispatch({
      actionType: PhotoConstants.RECEIVE_PHOTO,
      photo: photo
    });
  },

};

module.exports = PhotoActions;
