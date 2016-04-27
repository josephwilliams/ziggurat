var React = require('react');
var LoginForm = require('./LoginForm');
var SignUpForm = require('./SignUpForm');
var CurrentUserState = require('../mixins/current_user_state');

var AuthForms = React.createClass({
  forms: function () {
    return (
      <div>
        <LoginForm/>
        <br/>
        <SignUpForm/>
      </div>
    )
  },

  render: function () {
    return (
      <div>
        {this.forms()}
      </div>
    )
  }

});

module.exports = AuthForms;
