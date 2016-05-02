var React = require('react');
var LoginForm = require('./LoginForm');

var ClientActions = require('../../actions/client_actions');

var LoginForm = React.createClass({

  getInitialState: function () {
    return {username: "",
            password: "",
            errors: {}};
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
    } else {

    }
  },

  loginGuestUser: function (event) {
    event.preventDefault();
    ClientActions.loginUser({ user: {
      username: "guest",
      password: "password"
    }});

    this.props.parent.closeModal();
  },

  render: function () {
    var errors = JSON.stringify(this.state.userErrors);
    return (
      <div className="auth-modal">
        <div className="auth-forms">
          {errors}
          <form onSubmit={this.handleSubmit}
                className="auth-modal-login-form">
            <div className="field">
              <input type="text" className="input"
                     value={this.state.username} onChange={this.changeUsername}
                     id="fieldUsername"
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
              <button type="submit"
                      className="btn">Login</button>

          </form>
       </div>

       <div className="auth-modal-text-login">
         <div className="auth-modal-text">
         <h1>welcome to &nbsp;
           <img src="https://40.media.tumblr.com/dcedda1084e9b37cd607016d9be49b69/tumblr_o6ey0nnijK1vns4tpo1_400.png"
                width="130"/>
        </h1>


         <p>
           {this.showErrors()}
           Ziggurat provides the opportunity to experience a new kind of
           photo-sharing. By signing up, you will be able to pick and
           sort photos based on the emotions they inspire within you.
         </p>
         <p>
           Let's see how our photos make you feel.
         </p>
         <p>
           <button className="btn-demo"
                   onClick={this.loginGuestUser}>Demo</button>&nbsp;&nbsp;
            Or try as a guest user! &nbsp;&nbsp;
            <img src="https://67.media.tumblr.com/0c7a8025e4c23f9d4fd1e2b0ce7f54c7/tumblr_o6f8src6Se1vns4tpo1_540.png"
              width="50"
              className="camera-logo"/>
         </p>
       </div>
       </div>
     </div>
    )
  }

});

module.exports = LoginForm;
