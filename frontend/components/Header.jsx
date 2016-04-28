var React = require('react');
var Modal = require("react-modal");

var Header = React.createClass({
  authLinks: function () {
    if (this.state.currentUser){
      return (
      <div>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Upload</a></li>
        <li><a href="#" onClick={this.logoutUser}>Logout</a></li>
      </div>
      )
    } else {
      return (
      <div>
        <li><a href="#">Login</a></li>
        <li><a href="#">Signup</a></li>
      </div>
      )
    }
  },

  logoutUser: function (event) {
    event.preventDefault();
    ClientActions.logoutUser();
  },

  render: function () {
    return (
      <nav className="nav">
        <ul>
          <li className="title">
            <a href="#">&nbsp;&nbsp;z&nbsp;i&nbsp;g&nbsp;g&nbsp;u&nbsp;r
                                            a&nbsp;t&nbsp;&nbsp;
            </a></li>
          <li className="nav-link"><a href="#">signup</a></li>
          <li className="nav-link"><a href="#">login</a></li>
          <li className="nav-link"><a href="#">search</a></li>
          <li className="nav-link"><a href="#">flow</a></li>
        </ul>
      </nav>
    )
  }

});

module.exports = Header;
