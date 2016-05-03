var React = require('react');
var CurrentUserState = require('../mixins/current_user_state');
var HeaderAlt = require('./HeaderAlt');

var SearchPage = React.createClass({
  mixins: [CurrentUserState],

  render: function () {
    var currentUser = this.state.currentUser;

    return(
      <div className="search-page-container">
        <HeaderAlt/>
        <br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/>
      </div>
    )
  }
});

module.exports = SearchPage;
