var React = require('react');
var Modal = require("react-modal");
var SplashImage = require('./SplashImage');
var SplashContent = require('./SplashContent');
var StartButton = require('./StartButton');

var SplashPage = React.createClass({
  render: function () {
    return (
      <div>
        <SplashImage/>
        <div className="page-line"/>
        <div className="sub-content">
          <SplashContent/>
          <StartButton/>
        </div>
      </div>
    );
  }
});

module.exports = SplashPage;
