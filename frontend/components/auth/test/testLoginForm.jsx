var React = require('react');

var ClientActions = require('../../actions/client_actions');
var UserActions = require('../../actions/user_actions');

var LoginForm = React.createClass({

  getInitialState: function() {
    return {username: "",
            password: ""};
  },

  changeUsername: function (event) {
    this.setState({username: event.target.value});
  },

  changePassword: function (event) {
    this.setState({password: event.target.value});
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
  						<label> Username: <br/>
  							<input type="text"
                       value={this.state.username}
                       onChange={this.changeUsername}
                       />
  						</label>

  						<label> Password: <br/>
  							<input type="password"
                       value={this.state.password}
                       onChange={this.changePassword}
                       />
  						</label>
  					</section>

  					<input type="Submit" value="Login" className="auth-button"/>
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
