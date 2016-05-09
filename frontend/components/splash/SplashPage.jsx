var React = require('react');
var Modal = require('react-modal');
var SplashImage = require('./SplashImage');
var SplashContent = require('./SplashContent');
var StartButton = require('./StartButton');
var Header = require('../Header');
var CurrentUserState = require('../../mixins/current_user_state');
// var SplashPhoto = require('../photos/SplashPhoto');


var SplashPage = React.createClass({
  mixins: [CurrentUserState],

  postPhoto: function (photoData) {
    // called after successful upload via cloudinary widget
    ClientActions.postPhoto(photoData);
  },

  render: function () {
    var currentUser = this.state.currentUser;
    return (
      <div>
        <Header currentUser={currentUser}
                postPhoto={this.postPhoto}/>
        <SplashImage/>
        <div className="page-line"/>
        <div className="sub-content">
          <SplashContent />
          <StartButton/>
        </div>

      </div>
    );
  }
});

module.exports = SplashPage;
