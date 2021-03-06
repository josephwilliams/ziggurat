import React, { Component } from "react";
var Masonry = require('react-masonry-component');
var PhotoItemSmall = require('./PhotoItemSmall');

var masonryOptions = {
    transitionDuration: 0,
    columnWidth: 500
};

var Gallery = React.createClass({
  getInitialState: function () {
    return ({ photos: this.props.photos });
  },

  // morePhotos: function () {
  //   var that = this;
  //   var morePhotoElements;
  //   window.addEventListener('scroll', function(e){
  //       var distanceY = window.pageYOffset || document.documentElement.scrollTop;
  //       var loadMore = 400;
  //       if (distanceY > loadMore) {
  //         morePhotoElements = that.props.somePhotos.map(function(photo){
  //           return (
  //             <PhotoItemSmall photo={photo} key={photo.id}/>
  //           );
  //         });
  //       }
  //   });
  //
  //   this.setState({ photos: this.props.photos + this.props.somePhotos });
  //   return morePhotoElements;
  // },

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
