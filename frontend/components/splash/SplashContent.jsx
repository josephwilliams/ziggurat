var React = require('react');
var CurrentUserState = require('../../mixins/current_user_state');

//Components
var SearchTags = require('../SearchTags');
var SplashAbout = require('./SplashAbout');
var SignUpFormModal = require('../auth/SignUpFormModal');

//Actions
var ClientActions = require('../../actions/client_actions');

var SplashContent = React.createClass({
  // mixins: [CurrentUserState],

  uploadPhotoClick: function () {
    if (this.props.currentUser){
      this.openUploadWidget();
    }
  },

  postPhoto: function (photoData) {
    // called after successful upload via cloudinary widget
    ClientActions.postPhoto(photoData);
  },

  openUploadWidget: function () {
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(error, images){
        if (error === null) {
          this.postPhoto(images[0]);
        }
      }.bind(this)
    );
  },

  render: function () {
    var uploadSubText;
    if (this.props.currentUser){
      uploadSubText = "let's do this!"
    } else {
      uploadSubText = "sign up or login to contribute"
    }

    return (
      <div>
        <div className="splash-content">
          <ul>
            <li>
              <a>🔎begin your search</a> <br/>
                <SearchTags/>
            </li>

            <li>
              <a onClick={this.uploadPhotoClick}>upload a photo
                <div className="cloud">⇧</div></a>

                <br/>
              <div className="upload-subtext">
                {uploadSubText}
              </div>
            </li>
          </ul>
        </div>

        <div className="splash-content-about">
          <SplashAbout/>
        </div>

        <div className="splash-content-how">
          <img src="https://images.unsplash.com/45/Vo7YbYQQ8iyOo4J9bOoj_ggb24.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=f4405935f612ba77d99216f0f2f8f91a">
          </img>
          <div className="inside-image">
            <p>how it works?</p>
            <h3>FUCKING MAGIC</h3>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = SplashContent;
