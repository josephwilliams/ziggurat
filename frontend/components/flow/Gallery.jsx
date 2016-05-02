var React = require('react');
var Masonry = require('masonry-layout');
var PhotoItemSmall = require('./PhotoItemSmall');

var masonryOptions = {
    transitionDuration: 0
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
              className={'flow-gallery'} // default ''
              elementType={'ul'} // default 'div'
              options={masonryOptions} // default {}
              disableImagesLoaded={false} // default false
          >
              {childElements}
          </Masonry>
        </div>
      );
  }
});

module.exports = Gallery;
