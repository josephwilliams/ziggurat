var React = require('react');

var FunForm = React.createClass({
  render: function () {
    return (
        <div className="form-container">
          <div className="profile">
            <div className="above-start-button">
              your journey begins here
            </div>

            <button className="start-button" id="toggleProfile">
              <span>

                <div className="start-button-words">lets go</div>


              </span>
            </button>

            <div className="profile__form">
              <div className="profile__fields">
                <div className="field">
                  <input type="text" id="fieldUser" className="input" />
                  <label for="fieldUser" className="label">Username</label>
                </div>
                <div className="field">
                  <input type="password" id="fieldPassword" className="input"/>
                  <label for="fieldPassword" className="label">Password</label>
                </div>
                <div className="profile__footer">
                  <button className="btn">Login</button>
                </div>
              </div>
             </div>
          </div>
        </div>

    );
  }
});

module.exports = FunForm;
