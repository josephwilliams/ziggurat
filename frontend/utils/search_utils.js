var AppDispatcher = require('../dispatcher/dispatcher');
var ServerActions = require('../actions/server_actions');
var PhotoActions = require('../actions/photo_actions');

var SearchUtils = {
  filterSearch: function (queryString) {
    $.ajax({
      url: "api/search",
      type: "GET",
      data: {search: queryString},
      success: function (photoResults) {
        PhotoActions.getPhotos(photoResults);
      }
    });
  }
};

module.exports = SearchUtils;
