var AppDispatcher = require('../dispatcher/dispatcher');
var PhotoConstants = require('../constants/photo_constants');

var PhotoActions = {

  postPhoto: function(photoData) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.POST,
      photoData: photoData
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

};

module.exports = PhotoActions;
