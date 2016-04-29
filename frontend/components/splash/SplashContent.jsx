var React = require('react');
var SearchTags = require('../SearchTags');
var SplashAbout = require('./SplashAbout');

var SplashContent = React.createClass({
  render: function () {
    return (
      <div>
        <div className="splash-content">
          <ul>
            <li>
              <a>🔎begin your search</a> <br/>
                <SearchTags/>
            </li>

            <li>
              <a>upload a photo</a> <br/>
                   ☁contribute
            </li>
          </ul>
        </div>

        <div className="splash-content-about">
          <SplashAbout/>
        </div>

        <div className="splash-content-how">
          <img src="https://images.unsplash.com/45/Vo7YbYQQ8iyOo4J9bOoj_ggb24.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=f4405935f612ba77d99216f0f2f8f91a">
          </img>
          <div className="inside-image">
            <p>how it works?</p>
            <h3>FUCKING MAGIC</h3>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = SplashContent;
