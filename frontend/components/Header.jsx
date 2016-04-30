var React = require('react');
var Modal = require("react-modal");
var ClientActions = require('../actions/client_actions');
var AuthModal = require('./auth/AuthModal');
var SignUpFormModal = require('./auth/SignUpFormModal');

var modalStyle = {
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
    left            : '20%',
    right           : '20%',
    bottom          : '300px',
    top             : '20%',
    border          : '1px solid #ccc',
    padding         : '5px',
    // z-index         : 11
  }
};

var Header = React.createClass({
  uploadLink: function () {
    if (this.props.currentUser){
      return(
        <div>
          <li>upload</li>
        </div>
      )
    }
  },

  profileLink: function () {
    if (this.props.currentUser){
      return(
        <div>
          <li>profile</li>
        </div>
      )
    }
  },

  authLinks: function () {
    if (this.props.currentUser){
      return (
        <div className="nav">
          <ul>

            <div className="user-greeting">hi, {this.props.currentUser.username}</div>
            {this.profileLink()}
            <li onClick={this.logoutUser}>logout</li>
            &nbsp;

          </ul>
        </div>
      )
    } else {
      return (
        <div className="nav">
          <ul>
            <AuthModal style={modalStyle} text={"login"}/>
            <AuthModal style={modalStyle} text={"sign up"}/>
          </ul>
        </div>
      )
    };
  },

  logoutUser: function (event) {
    event.preventDefault();
    ClientActions.logoutUser();
  },

  render: function () {
    return (
      <header>
        <nav className="header">
          <div className="logo">
            <a href="#">
              <img src="https://40.media.tumblr.com/dcedda1084e9b37cd607016d9be49b69/tumblr_o6ey0nnijK1vns4tpo1_400.png"/>
            </a>
          </div>

          <div className="nav">
            <ul>
              {this.uploadLink()}
              <li>flow</li>
              <li>search</li>
              {this.authLinks()}
            </ul>
          </div>
        </nav>
      </header>
    )
  }
});

module.exports = Header;
