var React = require('react');
var PhotoStore = window.PhotoStore = require('../stores/photo_store');

var SearchResults = React.createClass({
  getInitialState: function () {
    return ({ photoResults: [] });
  },

  componentDidMount: function () {
    this.photosListener = PhotoStore.addListener(this.updateResults);
  },

  componentWillUnmount: function () {
    this.photosListener.remove();
  },

  updateResults: function () {
    this.setState({ photoResults: PhotoStore.all() });
  },

  photoResults: function () {

    this.state.photoResults.map(function(photo){
      return(
        <div className="search-photo-result">
          <img src={photo.image_url}/>
        </div>
      )
    });
  },

  render: function() {
    return (
      <div className="search-results-container">
        {this.photoResults()}
      </div>
    );
  }

});

module.exports = SearchResults;
