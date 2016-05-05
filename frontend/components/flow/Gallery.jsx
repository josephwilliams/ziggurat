var React = require('react');
var Masonry = require('react-masonry-component');
var PhotoItemSmall = require('./PhotoItemSmall');

var masonryOptions = {
    transitionDuration: 0,
    columnWidth: 500
};

var Gallery = React.createClass({
  render: function () {
      var childElements = this.props.photos.map(function(photo){
         return (
           <PhotoItemSmall photo={photo} key={photo.id}/>
          );
      });

      return (
        <div className="flow-gallery-container">

          <Masonry
              className={'flow-gallery'}
              elementType={'div'}
              options={masonryOptions}
              disableImagesLoaded={false}
          >
              {childElements}
          </Masonry>
        </div>
      );
  }
});

module.exports = Gallery;
