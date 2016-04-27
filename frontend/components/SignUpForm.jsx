var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var ClientActions = require('../actions/client_actions');

var SignUpForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return ({
      username: "",
      password: "",
      email: "",
      location: ""
    });
  },

  handleSubmit: function(event) {
    event.preventDefault();
    ClientActions.createUser({
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      location: this.state.location
    });

    this.setState({
      username: "",
      password: "",
      email: "",
      location: ""
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
                       valueLink={this.linkState('username')}/>
  						</label>

  						<label> Password:
  							<input type="password"
                       valueLink={this.linkState('password')}/>
  						</label>

              <label> Email:
                <input type="text"
                       valueLink={this.linkState('email')}/>
              </label>

              <label> Location:
                <input type="text"
                       valueLink={this.linkState('location')}/>
              </label>
  					</section>

  					<input type="Submit" value="Sign Up"/>
  				</form>
  		);
  	},

  render: function() {
    return (
      <div id="signup-form">
        {this.errors()}
        {this.form()}
      </div>
    );
  }
});

module.exports = SignUpForm;
