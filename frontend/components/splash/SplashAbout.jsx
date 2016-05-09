var React = require('react');

var SplashAbout = React.createClass({
  render: function () {
    return (
      <div>
        <br/>
        <p>
          Welcome to Ziggurat.  What is Ziggurat? Well, ziggurats (plural) were ancient Babylonian fortresses built into the sandy foothills of Mesopotamia, or, as we call it in modern times, the Middle East.  THE Ziggurat, however, is slightly different.  We are a photo-sharing web-app that allows users to upload photos and interact with one another through likes, tags, and comments.
        </p>
        <p className="splash-content-about-large">
          photo-sharing and beyond : like, tag, and comment your most beloved photos
        </p>
        <p>
          On the backend, Ziggurat is built on Ruby on Rails.  On the frontend, Ziggurat utilizes the charm and intrigue of the React.js Javascript library (thanks Facebook!) for near-instantaneous data-upkeep - which means a super-fast, highly responsive user experience (hopefully).
        </p>
        <br/>
      </div>
    );
  }
});

module.exports = SplashAbout;
