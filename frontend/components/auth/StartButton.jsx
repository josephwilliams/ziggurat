var React = require('react');

var FunForm = React.createClass({
  render: function () {
    return (
        <div className="start-button-container">
            <div className="above-start-button">
              your journey begins here
            </div>
            <button className="start-button">
              <span>
                <div className="start-button-words">
                  lets go
                </div>
              </span>
            </button>
        </div>
    );
  }
});

module.exports = FunForm;
