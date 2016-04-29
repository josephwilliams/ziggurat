var React = require('react');

var SplashAbout = React.createClass({
  render: function () {
    return (
      <div>
        <br/>
        <p>
          Welcome to Ziggurat.  What is Ziggurat? Well.. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="splash-content-about-large">
          photo-sharing and beyond : pick and sort based on love, fear, hope, and awe
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <br/>
      </div>
    );
  }
});

module.exports = SplashAbout;
