var React = require('react');
var ReactRouter = require('react-router');
var UserStore = require('../stores/user_store');
var SessionStore = require('../stores/session_store');
var ClientActions = require('../actions/client_actions');
var CurrentUserState = require('../mixins/current_user_state');

var UserShow = React.createClass({
  mixins: [CurrentUserState],

  render: function() {
    debugger
    var user = this.state.currentUser;
    return (
      <div>
        <h3>user profile</h3>
        <h4>{user.username}</h4>
        <p>{user.location}</p>

      </div>
    );
  }
});

module.exports = UserShow;
