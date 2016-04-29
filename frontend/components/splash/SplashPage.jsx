var React = require('react');
var Modal = require("react-modal");
var SplashImage = require('./SplashImage');
var SplashContent = require('./SplashContent');
var StartButton = require('../auth/StartButton');

var SplashPage = React.createClass({
  render: function () {
    return (
      <div>
        <SplashImage/>
        <SplashContent/>
        <StartButton/>
      </div>
    );
  }
});

module.exports = SplashPage;
