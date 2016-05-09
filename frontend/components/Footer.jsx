var React = require('react');

var Footer = React.createClass({
  render: function () {
    return (
      <div className="footer">
        <footer>
          <div className="footer-container">
            <p>
              Ziggurat was coded and designed in the hallowed halls
              of App Academy in the beautiful city of San Francisco
              between April 25th and May 6th by Joseph Williams.
              <a href="https://github.com/josephwilliams/ziggurat">github</a>
            </p>
          </div>
          </footer>
      </div>
    );
  }
});

module.exports = Footer;
