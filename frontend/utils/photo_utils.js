var AppDispatcher = require('../dispatcher/dispatcher');
var PhotoActions = require('../actions/photo_actions');

var PhotoUtils = {
  postPhoto: function (photoData) {
    $.ajax({
      url: "api/photos",
      type: "POST",
      data: { photo: {
              image_url: photoData.url,
              thumbnail_url: photoData.thumbnail_url,
              height: photoData.height,
              width: photoData.width,
              author_id: photoData.author_id,
              description: photoData.description
            }},
      success: function (photo) {
        PhotoActions.postPhoto(photo);
      },
      errors: function (errors) {
        PhotoActions.showErrors(errors);
      }
    });
  },

  getPhotos: function () {
    $.ajax({
      url: "api/photos",
      type: "GET",
      success: function (photos) {
        PhotoActions.getPhotos(photos);
      }
    });
  },

  getPhoto: function (id) {
    $.ajax({
      url: "api/photos/" + id.toString(),
      type: "GET",
      success: function (photo) {
        PhotoActions.receivePhoto(photo);
      }
    });
  },

};

module.exports = PhotoUtils;
