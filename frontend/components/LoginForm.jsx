var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var ClientActions = require('../actions/client_actions');
var UserActions = require('../actions/user_actions');

var LoginForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {username: "",
            password: ""};
  },

  handleSubmit: function(event) {
    event.preventDefault();
    ClientActions.loginUser({ user: {
      username: this.state.username,
      password: this.state.password
    }});

    this.setState({
      username: "",
      password: ""
    });
  },

  errors: function() {
    if (!this.state.userErrors){
      return;
    }
    var self = this;
    return (
      <ul>
        {
          Object.keys(this.state.userErrors).map(function(key, i){
            return (<li key={i}>{self.state.userErrors[key]}</li>);
          })
        }
      </ul>);
    },

  form: function(){
  		return(
  				<form onSubmit={this.handleSubmit}>
  					<section>
  						<label> Username:
  							<input type="text"
                       valueLink={this.linkState('username')}
                       />
  						</label>

  						<label> Password:
  							<input type="password"
                       valueLink={this.linkState('password')}
                       />
  						</label>
  					</section>

  					<input type="Submit" value="Login"/>
  				</form>
  		);
  	},

  render: function() {
    return (
      <div id="login-form">
        {this.errors()}
        {this.form()}
      </div>
    );
  }
});

module.exports = LoginForm;
