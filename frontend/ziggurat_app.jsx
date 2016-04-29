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
var AuthForms = require('./components/auth/AuthForms');
var UserShow = require('./components/UserShow');
var Header = require('./components/Header');
var SplashPage = require('./components/splash/SplashPage');
var SplashImage = require('./components/splash/SplashImage');
var AuthModal = require('./components/auth/AuthModal');
var Footer = require('./components/Footer');

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

  render: function() {
    var currentUser = this.state.currentUser;
    return (
      <div>
        <Header currentUser={currentUser} />
        <div className="nav-bar-placeholder"/>
        <div className="content">
          {this.props.children}
          <Footer />
        </div>
      </div>
    );
  }
});

var Router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={SplashPage}/>
      <Route path="user/:id" component={UserShow}/>
    </Route>
  </Router>
);


var funForm = function () {
  document.getElementById('toggleProfile').addEventListener('click', function () {
  [].map.call(document.querySelectorAll('.profile'), function(el) {
    el.classList.toggle('profile--open');
    });
  });
};

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("content");
  Modal.setAppElement(document.body);
  ReactDOM.render(Router, root);
  funForm();
});
