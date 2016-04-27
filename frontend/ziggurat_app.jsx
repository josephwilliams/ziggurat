//React
var React = require('react');
var ReactDOM = require('react-dom');

//Router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

//Components
var AuthForms = require('./components/AuthForms');
var UserShow = require('./components/UserShow');

//Mixins
var CurrentUserState = require('./mixins/current_user_state');

//Utils
var UserUtils = window.UserUtil = require('./utils/user_utils');

//Actions
var ClientActions = require('./actions/client_actions');

//new commit
//App
var App = React.createClass({
  mixins: [CurrentUserState],

  componentDidMount: function () {
    ClientActions.fetchCurrentUser();
  },

  greeting: function () {
    if (this.state.currentUser){
      return (
        <div>
          <p>hello, {this.state.currentUser.username}</p>
        </div>
      );
    } else {
      return (
        <p>hello, please sign up or login!</p>
      );
    };
  },

  showErrors: function () {
    return (
      <p>
        {JSON.stringify(this.state.userErrors)}
      </p>
    );
  },

  logoutUser: function (event) {
    event.preventDefault();
    ClientActions.logoutUser();
  },

  render: function() {
    return (
      <div>
        <h3>ZIGGU</h3>
        {this.props.children}
        {this.greeting()}
        {this.showErrors()}
        <button onClick={this.logoutUser}>Logout</button>
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
  ReactDOM.render(Router, root);
});
