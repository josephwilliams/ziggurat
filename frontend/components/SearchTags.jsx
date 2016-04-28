var React = require('react');

var SearchTags = React.createClass({
  render: function () {
    return(
      <div className="search-tags">
        <li><button className="tag">volcanoes</button></li>
        <li><button className="tag">woah</button></li>
        <li><button className="tag">omg</button></li>
        <li><button className="tag">beach</button></li>
        <li><button className="tag">walrus</button></li>
        <li><button className="tag">asia</button></li>
        <li><button className="tag">italy</button></li>
      </div>
    );
  }
});

module.exports = SearchTags;
