//React
var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require("react-modal");

//Router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

//Components
var AuthForms = require('./components/AuthForms');
var UserShow = require('./components/UserShow');
var Header = require('./components/Header');

//Mixins
var CurrentUserState = require('./mixins/current_user_state');

//Utils
var UserUtils = require('./utils/user_utils');

//Actions
var ClientActions = require('./actions/client_actions');

ClientActions.fetchCurrentUser();

//App
var App = React.createClass({
  mixins: [CurrentUserState],

  componentDidMount: function () {
  },

  greeting: function () {
    if (this.state.currentUser){
      return (
        <div>
          <p>hello, {this.state.currentUser.username}</p>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <p>hello, please sign up or login!</p>
      );
    };
  },

  logoutUser: function (event) {
    event.preventDefault();
    ClientActions.logoutUser();
  },

  render: function() {
    var currentUser = this.state.currentUser;
    return (
      <div>
        {this.props.children}
        <Header currentUser={currentUser}/>
        {this.greeting()}
        <AuthForms/>
      </div>
    );
  }
});

var Router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/users/:id" component={UserShow}/>
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("content");
  Modal.setAppElement(document.body);
  ReactDOM.render(Router, root);
});
