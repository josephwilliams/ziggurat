var React = require('react');

var ClientActions = require('../actions/client_actions');

var SignUpForm = React.createClass({

  getInitialState: function () {
    return ({
      username: "",
      password: "",
      email: "",
      location: ""
    });
  },

  changeUsername: function (event) {
    this.setState({username: event.target.value});
  },

  changePassword: function (event) {
    this.setState({password: event.target.value});
  },

  changeLocation: function (event) {
    this.setState({location: event.target.value});
  },

  changeEmail: function (event) {
    this.setState({email: event.target.value});
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
                       value={this.state.username}
                       onChange={this.changeUsername}/>
  						</label>

  						<label> Password:
  							<input type="password"
                       value={this.state.password}
                       onClick={this.changePassword}/>
  						</label>

              <label> Email:
                <input type="text"
                       value={this.state.email}
                       onChange={this.changeEmail}/>
              </label>

              <label> Location:
                <input type="text"
                       value={this.state.location}
                       onChange={this.changeLocation}/>
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
