var React = require('react');
var LoginForm = require('./LoginForm');
var SignUpForm = require('./SignUpForm');
var CurrentUserState = require('../../mixins/current_user_state');
var ClientActions = require('../../actions/client_actions');

var AuthForms = React.createClass({
  mixins: [CurrentUserState],

  getInitialState: function () {
    return {username: "",
            password: ""};
  },

  changeUsername: function (event) {
    this.setState({username: event.target.value});
  },

  changePassword: function (event) {
    this.setState({password: event.target.value});
  },

  handleSubmit: function (event) {
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

  showErrors: function () {
    if (this.state.userErrors){
      this.state.userErrors.map(function(error){
        return (<p>{error}</p>)
      });
    }
  },

  loginGuestUser: function (event) {
    event.preventDefault();
    ClientActions.loginUser({ user: {
      username: "guest",
      password: "password"
    }});
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
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <input type="text" className="input"
                     value={this.state.username} onChange={this.changeUsername}
                     />
              <label className="label">Username</label>
            </div>
            <div className="field">
              <input type="password" className="input"
                     value={this.state.password} onChange={this.changePassword}
                     id="fieldPassword"
                     />
              <label className="label">Password</label>
            </div>
              <button className="btn">Login</button>

          </form>
       </div>

       <div className="auth-modal-text">
         <h1>welcome to ziggurat</h1>
         <p>
           {this.showErrors()}
           Ziggurat provides the opportunity to experience a new kind of
           photo-sharing. By signing up, you will be able to pick and
           sort photos based on the emotions they invoke within you.
         </p>
         <p>
           Lets see how our photos make you feel.
         </p>
         <p>
           <button className="btn-demo"
                   onClick={this.loginGuestUser}>Demo</button>&nbsp;&nbsp;
            Or try as a guest user!

         </p>
       </div>
     </div>
    )
  }

});

module.exports = AuthForms;
