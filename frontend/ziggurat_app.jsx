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

//Mixins
var CurrentUserState = require('./mixins/current_user_state');

//Actions
var ClientActions = require('./actions/client_actions');
var PhotoActions = require('./actions/photo_actions');

// Checks current user authentication upon loading
ClientActions.fetchCurrentUser();

//App
var App = React.createClass({
  mixins: [CurrentUserState],

  postPhoto: function (photoData) {
    // called after successful upload via cloudinary widget
    ClientActions.postPhoto(photoData);
  },

  render: function() {
    var currentUser = this.state.currentUser;
    return (
      <div>
        <Header currentUser={currentUser}
                postPhoto={this.postPhoto}/>
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
      <IndexRoute component={FlowPage}/>
      <Route path="splash" component={SplashPage}/>
      <Route path="flow" component={FlowPage}/>
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("content");
  Modal.setAppElement(document.body);
  ReactDOM.render(Router, root);
});
