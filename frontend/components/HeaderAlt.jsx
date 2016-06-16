var React = require('react');
var Modal = require("react-modal");
var ClientActions = require('../actions/client_actions');
var LoginFormModal = require('./auth/LoginFormModal');
var SignUpFormModal = require('./auth/SignUpFormModal');
var CurrentUserState = require('../mixins/current_user_state');

var SignUpFormStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(255, 255, 255, 0.75)',
    // z-index         : 10
  },
  content : {
    position        : 'fixed',
    top             : '15%',
    bottom          : '36%',
    left            : '20%',
    right           : '20%',
    border          : '1px solid #161616',
    // z-index         : 11
  }
};

var HeaderAlt = React.createClass({
  mixins: [CurrentUserState],

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentDidMount: function () {
    ClientActions.fetchCurrentUser();
  },

  header: function () {
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 175) {
        $(".nav").addClass("transparent");
      } else {
        $(".nav").removeClass("transparent");
      }
    });
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

  uploadLink: function () {
    if (this.state.currentUser){
      return(
        <div>
          <li onClick={this.openUploadWidget}>upload</li>
        </div>
      )
    }
  },

  profileLink: function () {
    if (this.state.currentUser){
      return(
        <div>
          <li onClick={this.linkProfile}>profile</li>
        </div>
      )
    }
  },

  authLinks: function () {
    if (this.state.currentUser){
      return (
        <div>
          <ul>

            <div className="user-greeting">hi, {this.state.currentUser.username}</div>
            &nbsp;&nbsp;
            {this.profileLink()}
            <li onClick={this.logoutUser}>logout</li>

          </ul>
        </div>
      )
    } else {
      return (
        <div>
          <ul>
            <LoginFormModal text={"login"} parent={this}/>
            <SignUpFormModal text={"sign up"} parent={this}/>
          </ul>
        </div>
      )
    };
  },

  logoutUser: function (event) {
    event.preventDefault();
    ClientActions.logoutUser();
  },

  linkExplore: function () {
    this.context.router.push("flow");
  },

  linkSearch: function () {
    this.context.router.push("search");
  },

  linkProfile: function () {
    this.context.router.push("profile");
  },

  render: function () {
    return (
      <div>
        {this.header()}
        <nav className="header-alt">
          <div className="logo-alt">
            <a href="#">
              <img src="https://40.media.tumblr.com/dcedda1084e9b37cd607016d9be49b69/tumblr_o6ey0nnijK1vns4tpo1_400.png"/>
            </a>
          </div>

          <div className="nav-alt">
            <ul>
              {this.uploadLink()}
                  <a onClick={this.linkExplore}>
                    <li>
                    explore
                  </li>
                  </a>

                  <a onClick={this.linkSearch}>
                    <li>
                  search
                </li>
                </a>
              </ul>

              <ul>
              {this.authLinks()}
              </ul>
          </div>
        </nav>
      </div>
    )
  }
});

module.exports = HeaderAlt;
