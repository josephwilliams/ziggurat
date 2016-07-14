var React = require('react');
var ClientActions = require('../actions/client_actions');
var TagStore = require('../stores/tag_store');

var SearchTags = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  linkSearch: function (word) {
    ClientActions.filterSearch(word);
    this.context.router.push("search");
  },

  render: function () {
    return(
      <div>
      <ul className="search-tags">
        <li><button className="tag" onClick={() => this.linkSearch('bay')}>bay</button></li>
        <li><button className="tag" onClick={() => this.linkSearch('chill')}>chill</button></li>
        <li><button className="tag" onClick={() => this.linkSearch('omg')}>omg</button></li>
        <li><button className="tag" onClick={() => this.linkSearch('drums')}>drums</button></li>
        <li><button className="tag" onClick={() => this.linkSearch('nature')}>nature</button></li>
        <li><button className="tag" onClick={() => this.linkSearch('forest')}>forest</button></li>
        <li><button className="tag" onClick={() => this.linkSearch('car')}>car</button></li>
      </ul>
        <ul className="search-tags">

          <li><button className="tag" onClick={() => this.linkSearch('sea')}>sea</button></li>
          <li><button className="tag" onClick={() => this.linkSearch('boats')}>boats</button></li>
          <li><button className="tag" onClick={() => this.linkSearch('summer')}>summer</button></li>
          <li><button className="tag" onClick={() => this.linkSearch('blue')}>blue</button></li>
          <li><button className="tag" onClick={() => this.linkSearch('human')}>human</button></li>
          <li><button className="tag" onClick={() => this.linkSearch('sky')}>sky</button></li>
        </ul>
        <ul className="search-tags">

          <li><button className="tag" onClick={() => this.linkSearch('California')}>California</button></li>
          <li><button className="tag" onClick={() => this.linkSearch('bay')}>SF</button></li>
          <li><button className="tag" onClick={() => this.linkSearch('city')}>city</button></li>
          <li><button className="tag" onClick={() => this.linkSearch('woah')}>woah</button></li>
          <li><button className="tag" onClick={() => this.linkSearch('trees')}>trees</button></li>
          <li><button className="tag" onClick={() => this.linkSearch('dark')}>dark</button></li>
        </ul>
      </div>
    );
  }
});

module.exports = SearchTags;
