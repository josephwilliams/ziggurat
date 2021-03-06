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
var UserShow = require('./components/UserShow');
var Header = require('./components/Header');
var SplashPage = require('./components/splash/SplashPage');
var Footer = require('./components/Footer');
var FlowPage = require('./components/flow/FlowPage');
var PhotoShow = require('./components/photos/PhotoShow');
var PhotoEdit = require('./components/photos/PhotoEdit');
var SearchPage = require('./components/SearchPage');
var ProfilePage = require('./components/profile/ProfilePage');

//Mixins
var CurrentUserState = require('./mixins/current_user_state');

//Actions
var ClientActions = require('./actions/client_actions');
var PhotoActions = require('./actions/photo_actions');

// Checks current user authentication upon loading

//App
var App = React.createClass({
  // mixins: [CurrentUserState],

  componentDidMount: function () {
    ClientActions.fetchCurrentUser();
  },

  render: function() {
    return (
      <div>
        <div className="content">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
});

var Router = (
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={SplashPage}/>
      <Route path="splash" component={SplashPage} />
      <Route path="flow" component={FlowPage} />
      <Route path="photos/:photoId" component={PhotoShow}/>
      <Route path="search" component={SearchPage}/>
      <Route path="profile" component={ProfilePage}/>
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("content");
  Modal.setAppElement(document.body);
  ReactDOM.render(Router, root);
});
