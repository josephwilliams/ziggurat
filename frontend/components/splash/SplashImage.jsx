var React = require('react');
var StartButton = require('./StartButton');

var SplashImage = React.createClass({
  randomPhotoLink: function () {
    var photoLinks = [];
    var randPhotoLink = photoLinks[Math.floor(Math.random() * photoLinks.length)];
    return (
      randPhotoLink
    );
  },

  render: function () {
    return (
      <div className="splash-image">
        <img src="https://40.media.tumblr.com/13ad600b93fac1b5fcd1c282664e452d/tumblr_o6extrWHad1vns4tpo1_1280.png"/>
      </div>
    )
  }
});

module.exports = SplashImage;
