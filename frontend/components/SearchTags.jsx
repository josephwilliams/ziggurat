var React = require('react');
var ClientActions = require('../actions/client_actions');
var TagStore = require('../stores/tag_store');

var SearchTags = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  
  linkSearch: function () {
    this.context.router.push("search");
  },

  render: function () {
    return(
      <div>
      <ul className="search-tags" onClick={this.linkSearch}>
        <li><button className="tag">bay</button></li>
        <li><button className="tag">chill</button></li>
        <li><button className="tag">omg</button></li>
        <li><button className="tag">drums</button></li>
        <li><button className="tag">nature</button></li>
      </ul>
        <ul className="search-tags" onClick={this.linkSearch}>

          <li><button className="tag">sea</button></li>
          <li><button className="tag">boats</button></li>
          <li><button className="tag">summer</button></li>
          <li><button className="tag">woah</button></li>

        </ul>
        <ul className="search-tags" onClick={this.linkSearch}>

          <li><button className="tag">California</button></li>
          <li><button className="tag">SF</button></li>
          <li><button className="tag">woah</button></li>
          <li><button className="tag">blue</button></li>
          <li><button className="tag">trees</button></li>
          <li><button className="tag">dark</button></li>
        </ul>
      </div>
    );
  }
});

module.exports = SearchTags;
