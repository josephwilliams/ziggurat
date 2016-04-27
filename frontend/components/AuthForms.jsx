var React = require('react');
var LoginForm = require('./LoginForm');
var SignUpForm = require('./SignUpForm');
var CurrentUserState = require('../mixins/current_user_state');

var AuthForms = React.createClass({
  mixins: [CurrentUserState],

  showErrors: function () {
    if (this.state.userErrors){
      this.state.userErrors.map(function(error){
        return (<p>{error}</p>)
      });
    }
  },

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
        {this.showErrors()}
        {this.forms()}
      </div>
    )
  }

});

module.exports = AuthForms;
