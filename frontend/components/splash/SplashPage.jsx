var React = require('react');
var Modal = require("react-modal");
var SplashImage = require('./SplashImage');
var SplashContent = require('./SplashContent');

var SplashPage = React.createClass({
  render: function () {
    return (
      <div>
        <SplashImage/>
        <SplashContent/>
      </div>
    );
  }
});

module.exports = SplashPage;
