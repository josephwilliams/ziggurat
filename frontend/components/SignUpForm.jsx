var React = require('react');
var ClientActions = require('../actions/client_actions');

var SignUpForm = React.createClass({
  getInitialState: function() {
    return {username: "",
            password: "",
            email: "",
            location: ""};
  },

  handleUsernameInput: function(event) {
    this.setState({username: event.target.value});
  },

  handlePasswordInput: function(event) {
    this.setState({password: event.target.value});
  },

  handleEmailInput: function(event) {
    this.setState({email: event.target.value});
  },

  handleLocationInput: function(event) {
    this.setState({location: event.target.value});
  },

  handleSubmit: function(event) {
    event.preventDefault();
    ClientActions.createUser({
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      location: this.state.location
    });
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
                       value={this.state.username}
                       onChange={this.handleUsernameInput}/>
  						</label>

  						<label> Password:
  							<input type="password"
                       value={this.state.password}
                       onChange={this.handlePasswordInput} />
  						</label>

              <label> Email:
                <input type="text"
                       value={this.state.email}
                       onChange={this.handleEmailInput} />
              </label>

              <label> Location:
                <input type="text"
                       value={this.state.location}
                       onChange={this.handleLocationInput} />
              </label>


  					</section>

  					<input type="Submit" value="Sign Up"/>
  				</form>
  		);
  	},

  render: function() {
    return (
      <div id="signup-form">

        {this.form()}
      </div>
    );
  }
});

module.exports = SignUpForm;
