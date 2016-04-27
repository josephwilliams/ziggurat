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
var LoginForm = require('./components/LoginForm');
var SignUpForm = require('./components/SignUpForm');
var UserShow = require('./components/UserShow');

//mixins
var CurrentUserState = require('./mixins/current_user_state');

var UserUtils = window.UserUtil = require('./utils/user_utils');

var App = React.createClass({
  mixins: [CurrentUserState],


  render: function() {
    var greeting = "";

    if (this.state.currentUser){
      greeting = "hello " + this.state.currentUser.username;
    }

    var authForms = (

      <div>
        <h4>{greeting}</h4>
        <LoginForm/>
        <br/>
        <SignUpForm/>
      </div>
    );

    return (
      <div>
        <header><h3>ZIGGU</h3></header>
        {this.props.children}
        {authForms}
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
