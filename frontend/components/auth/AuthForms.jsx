var React = require('react');
var LoginForm = require('./LoginForm');
var SignUpForm = require('./SignUpForm');
var CurrentUserState = require('../../mixins/current_user_state');

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
    var errors = JSON.stringify(this.state.userErrors);
    return (
      <div className="auth-modal">
        <div className="auth-forms">
          {errors}
          {this.showErrors()}
          {this.forms()}
        </div>
        <div className="auth-modal-text">
          <h3>welcome to ziggurat</h3>
          <p>
            Ziggurat provides the opportunity to experience a new kind of
            photo-sharing experience.  Lets see how our photos make you feel.
          </p>
        </div>
      </div>
    )
  }

});

module.exports = AuthForms;
