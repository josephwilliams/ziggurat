var React = require('react');
var ReactDOM = require('react-dom');
var LoginFormModal = require('./LoginFormModal');

var ClientActions = require('../../actions/client_actions');

var SignUpForm = React.createClass({

  getInitialState: function () {
    return {username: "",
            password: "",
            email: "",
            location: "optional",
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

    // if (this.state.location === "optional"){
    //   ClientActions.createUser({
    //     username: this.state.username,
    //     password: this.state.password,
    //     email: this.state.email,
    //   }, this.props.parent.closeModal);
    // } else {
    //   ClientActions.createUser({
    //     username: this.state.username,
    //     password: this.state.password,
    //     email: this.state.email,
    //     location: this.state.location
    //   }, this.props.parent.closeModal);
    // }

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
             <div className="field">
              <input type="text" className="input"
                     value={this.state.email} onChange={this.changeEmail}
                     id="fieldEmail"
                     />
                   <label className="label">Email</label>
            </div>
            <div className="field">
             <input type="location" className="input"
                    value={this.state.location}
                    onChange={this.changeLocation}
                    onClick={this.locationInputClick}
                    id="fieldEmail"
                    />
                  <label className="label">Location</label>
           </div>

          </form>
       </div>

       <div className="auth-modal-text">
         <h1>welcome to &nbsp;
           <img src="https://40.media.tumblr.com/dcedda1084e9b37cd607016d9be49b69/tumblr_o6ey0nnijK1vns4tpo1_400.png"
                width="130"/>
        </h1>

        <p>
          already a member? &nbsp;&nbsp;<a onClick={this.closeMe}>login!</a>
        </p>
        <br/>

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

           <button type="submit"
                   onClick={this.handleSubmit}
                   form="signupForm"
                   className="btn">Signup</button>

            &nbsp;&nbsp;
           <button className="btn-demo"
                   onClick={this.loginGuestUser}>Demo</button>&nbsp;&nbsp;
            Or try as a guest user! &nbsp;&nbsp;
            <img src="https://67.media.tumblr.com/0c7a8025e4c23f9d4fd1e2b0ce7f54c7/tumblr_o6f8src6Se1vns4tpo1_540.png"
              width="50"
              className="camera-logo"/>
         </p>
       </div>
     </div>
    )
  }

});

module.exports = SignUpForm;
