var React = require('react');
var Modal = require("react-modal");
var ClientActions = require('../actions/client_actions');
var AuthModal = require('./auth/AuthModal');

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

    left            : '37%',
    right           : '150px',
    bottom          : '80',
    border          : '1px solid #ccc',
    padding         : '10px',
    // z-index         : 11
  }
};

var Header = React.createClass({
  authLinks: function () {
    if (this.props.currentUser){
      return (
        <div className="nav">
          <li><a href="#" onClick={this.logoutUser}>
            &nbsp;&nbsp;&nbsp;logout&nbsp;&nbsp;&nbsp;
          </a>
          </li>
          <li className="user-greeting">hello, {this.props.currentUser.username}</li>
        </div>
      )
    } else {
      return (
        <div className="nav">
          <ul>
            <li><AuthModal style={modalStyle} text={"login"}/></li>
            <li><AuthModal style={modalStyle} text={"sign up"}/></li>
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
            <a href="#">&nbsp;&nbsp;z&nbsp;i&nbsp;g&nbsp;g&nbsp;u&nbsp;r
              a&nbsp;t&nbsp;
            </a>
          </div>

          <div className="nav">
            <ul>
              <li><a href="#">&nbsp;&nbsp;&nbsp;flow&nbsp;&nbsp;&nbsp;</a></li>
              <li><a href="#">&nbsp;&nbsp;&nbsp;search&nbsp;&nbsp;&nbsp;</a></li>
              {this.authLinks()}
            </ul>
          </div>
        </nav>
      </header>
    )
  }
});

module.exports = Header;
