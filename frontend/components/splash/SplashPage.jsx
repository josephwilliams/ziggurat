var React = require('react');
var Modal = require("react-modal");
var SplashImage = require('./SplashImage');
var SplashContent = require('./SplashContent');
var FunForm = require('../auth/FunForm');

var SplashPage = React.createClass({
  render: function () {
    return (
      <div>
        <SplashImage/>
        <SplashContent/>
        <FunForm/>
      </div>
    );
  }
});

module.exports = SplashPage;
