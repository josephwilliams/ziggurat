var React = require('react');
var ReactDOM = require('react-dom');
var LoginFormModal = require('./LoginFormModal');
var ClientActions = require('../../actions/client_actions');

var SignUpForm = React.createClass({

  getInitialState: function () {
    return {username: "",
            password: "",
            email: "",
            location: "",
            errors: {}};
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

  locationInputClick: function () {
    this.setState({
      location: ""
    });
  },

  handleSubmit: function (event) {
    event.preventDefault();

    ClientActions.createUser({
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      location: this.state.location
    }, this.props.parent.closeModal);

    this.setState({
      username: "",
      password: "",
      email: "",
      location: ""
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

  closeMe: function () {
    // <LoginFormModal text={"login!"} parent={this} open={true}/>
    this.props.parent.closeModal();
  },

  render: function () {
    var errors = JSON.stringify(this.state.userErrors);
    return (
      <div className="auth-modal">
        <div className="auth-modal-header">
          welcome to &nbsp;
            <img src="https://40.media.tumblr.com/dcedda1084e9b37cd607016d9be49b69/tumblr_o6ey0nnijK1vns4tpo1_400.png"
              width="130"/>

        </div>
        <div className="auth-modal-content">
          <div className="auth-forms">
            {errors}
            <form onSubmit={this.handleSubmit}
                  id="signupForm">
              <div className="field">
                <input type="text" className="input"
                       value={this.state.username} onChange={this.changeUsername}
                       ref="usernameInput" autoFocus />
                <label className="label">Username</label>
              </div>
              <div className="field">
                <input type="password" className="input"
                       value={this.state.password} onChange={this.changePassword}
                       id="fieldPassword"
                       />
                <label className="label">Password</label>
              </div>
            </form>

            <div className="modal-buttons">
              <button type="submit"
                      onClick={this.handleSubmit}
                      form="signupForm"
                      className="btn">Signup</button>

               &nbsp;&nbsp;
              <button className="btn-demo"
                      onClick={this.loginGuestUser}>Demo</button>&nbsp;&nbsp;

            </div>
         </div>

         <div className="auth-modal-text">
           <p>
             {this.showErrors()}
             Ziggurat provides the opportunity to experience a new kind of
             photo-sharing. By signing up, you will be able to pick and
             sort photos based on the emotions they inspire within you.
           </p>

           <p>
             Let's see how our photos make you feel.
           </p>
         </div>
       </div>
     </div>
    )
  }

});

module.exports = SignUpForm;
