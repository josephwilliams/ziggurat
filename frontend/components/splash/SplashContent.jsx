var React = require('react');
var CurrentUserState = require('../../mixins/current_user_state');
var SignUpFormModal = require('../auth/SignUpFormModal');

//Components
var SearchTags = require('../SearchTags');
var SplashAbout = require('./SplashAbout');
var SignUpFormModal = require('../auth/SignUpFormModal');

//Actions
var ClientActions = require('../../actions/client_actions');

//Stores
var PhotoStore = require('../../stores/photo_store');

var SplashContent = React.createClass({
  mixins: [CurrentUserState],

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  uploadPhotoClick: function () {
    if (this.state.currentUser){
      this.openUploadWidget();
    } else {
      <SignUpFormModal parent={this} modalOpen={true}/>
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

  linkSearch: function () {
    this.context.router.push("search")
  },

  render: function () {
    var uploadSubText;
    if (this.state.currentUser){
      uploadSubText = "let's do this!"
    } else {
      uploadSubText = "sign up or login to contribute"
    }

    return (
      <div>
        <div className="splash-content">
          <ul>
            <li>
              <a onClick={this.linkSearch}>🔎begin your search</a> <br/>
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
            <h3>EXPLORE</h3>
              <p>journey through our collection of photos</p>
            <h3>JOIN</h3>
              <p>become a member! it's quick and easy</p>
            <h3>CONTRIBUTE</h3>
              <p>post photos! or like, tag, and comment other peoples photos</p>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = SplashContent;
