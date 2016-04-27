var React = require('react');

var ClientActions = require('../actions/client_actions');
var UserActions = require('../actions/user_actions');
var CurrentUserState = require('../mixins/current_user_state');

var LoginForm = React.createClass({
  mixins: [CurrentUserState],

  getInitialState: function() {
    return {username: "",
            password: ""};
  },

  handleUsernameInput: function(event) {
    this.setState({username: event.target.value});
  },

  handlePasswordInput: function(event) {
    this.setState({password: event.target.value});
  },

  handleSubmit: function(event) {
    event.preventDefault();
    ClientActions.loginUser({ user: {
      username: this.state.username,
      password: this.state.password
    }});

  },

  // errors: function() {
  //   if (!this.state.userErrors){
  //     return;
  //   }
  //   var self = this;
  //   return (
  //     <ul>
  //       {
  //         Object.keys(this.state.userErrors).map(function(key, i){
  //           return (<li key={i}>{self.state.userErrors[key]}</li>);
  //         })
  //       }
  //     </ul>);
  //   },

  form: function(){
  		return(
  				<form onSubmit={this.handleSubmit}>
  					<section>
  						<label> Username:
  							<input type="text"
                       value=""
                       onChange={this.handleUsernameInput}/>
  						</label>

  						<label> Password:
  							<input type="password"
                       value=""
                       onChange={this.handlePasswordInput} />
  						</label>
  					</section>

  					<input type="Submit" value="Login"/>
  				</form>
  		);
  	},

  render: function() {
    return (
      <div id="login-form">

        {this.form()}
      </div>
    );
  }
});

module.exports = LoginForm;
