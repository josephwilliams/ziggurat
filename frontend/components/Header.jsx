var React = require('react');
var Modal = require("react-modal");
var ClientActions = require('../actions/client_actions');
var AuthModal = require('./auth/AuthModal');

var Header = React.createClass({
  authLinks: function () {
    if (this.props.currentUser){
      return (
        <div>
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
            <li><a href="#">&nbsp;&nbsp;&nbsp;<AuthModal style={modalStyle}/>&nbsp;&nbsp;&nbsp;</a></li>
            <li><a href="#">&nbsp;&nbsp;&nbsp;login&nbsp;&nbsp;&nbsp;</a></li>
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
    )
  }
});


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
    top             : '100px',
    left            : '150px',
    right           : '150px',
    bottom          : '100px',
    border          : '1px solid #ccc',
    padding         : '10px',
    // z-index         : 11
  }
};

module.exports = Header;
