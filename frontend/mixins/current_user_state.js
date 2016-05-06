var React = require('react');
var SessionStore = require('../stores/session_store');
var UserActions = require('../actions/user_actions');

var CurrentUserState = {

  getInitialState: function() {
    return {
      currentUser: SessionStore.currentUser(),
      userErrors: SessionStore.errors()
    };
  },

  componentDidMount: function() {
    this.listener = SessionStore.addListener(this.updateUser);
    if (typeof SessionStore.currentUser() === 'undefined'){
      UserActions.fetchCurrentUser();
    }
    // UserActions.fetchCurrentUser();
  },

  updateUser: function() {
    this.setState({
      currentUser: SessionStore.currentUser(),
      userErrors: SessionStore.errors()
    });
  },

  componentWillUnmount: function(){
    this.listener.remove();
  }

};

module.exports = CurrentUserState;
