var React = require('react');

var SearchTags = React.createClass({
  render: function () {
    return(
      <div>
      <div className="search-tags">
        <li><button className="tag">volcanoes</button></li>
        <li><button className="tag">woah</button></li>
        <li><button className="tag">omg</button></li>
        <li><button className="tag">walruses</button></li>
        <li><button className="tag">nature</button></li>
      </div>
        <div className="search-tags">

          <li><button className="tag">beach</button></li>
          <li><button className="tag">walrus</button></li>
          <li><button className="tag">volcanoes</button></li>
          <li><button className="tag">woah</button></li>

        </div>
        <div className="search-tags">

          <li><button className="tag">asia</button></li>
          <li><button className="tag">italy</button></li>
          <li><button className="tag">woah</button></li>
          <li><button className="tag">omg</button></li>
          <li><button className="tag">walrus</button></li>
          <li><button className="tag">volcanoes</button></li>
        </div>
      </div>
    );
  }
});

module.exports = SearchTags;
