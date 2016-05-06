var React = require('react');
var PhotoStore = window.PhotoStore = require('../stores/photo_store');
var ClientActions = require('../actions/client_actions');
var Masonry = require('react-masonry-component');
var PhotoItemSmall = require('./flow/PhotoItemSmall');

var masonryOptions = {
    transitionDuration: 0,
    columnWidth: 500
};

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

  // photoResults: function () {
  //   if (this.state.photoResults !== []){
  //     this.state.photoResults.map(function(photo){
  //       console.log(photo);
  //       return(
  //         <div className="search-photo-result">
  //           <h3>{photo.description}</h3>
  //           <img src={photo.image_url}/>
  //         </div>
  //       )
  //     });
  //   }
  // },

  render: function() {
    var results =
      this.state.photoResults.map(function(photo){
        return(
          <PhotoItemSmall photo={photo} key={photo.id}/>
        )
      });

      return (
        <div className="flow-gallery-container">
          <Masonry
              className={'flow-gallery'}
              elementType={'div'}
              options={masonryOptions}
              disableImagesLoaded={false}
          >
              {results}
          </Masonry>
        </div>
      );

  }

});

module.exports = SearchResults;
