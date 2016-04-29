var React = require('react');

var SearchTags = React.createClass({
  render: function () {
    return(
      <div>
      <ul className="search-tags">
        <li><button className="tag">volcanoes</button></li>
        <li><button className="tag">woah</button></li>
        <li><button className="tag">omg</button></li>
        <li><button className="tag">walruses</button></li>
        <li><button className="tag">nature</button></li>
      </ul>
        <ul className="search-tags">

          <li><button className="tag">beach</button></li>
          <li><button className="tag">walrus</button></li>
          <li><button className="tag">volcanoes</button></li>
          <li><button className="tag">woah</button></li>

        </ul>
        <ul className="search-tags">

          <li><button className="tag">asia</button></li>
          <li><button className="tag">italy</button></li>
          <li><button className="tag">woah</button></li>
          <li><button className="tag">omg</button></li>
          <li><button className="tag">walrus</button></li>
          <li><button className="tag">volcanoes</button></li>
        </ul>
      </div>
    );
  }
});

module.exports = SearchTags;
