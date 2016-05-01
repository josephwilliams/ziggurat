var React = require('react');
var Modal = require('react-modal');
var AuthForms = require('../auth/AuthForms');
var SignUpFormModal = require('../auth/SignUpFormModal');

var signUpFormModalStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(255, 255, 255, 0.75)',
    // z-index         : 10
  },
  content : {
    position        : 'fixed',
    left            : '20%',
    right           : '20%',
    // bottom          : '220px',
    bottom          : '20%',

    top             : '25%',
    border          : '1px solid #ccc',
    padding         : '5px',
    // z-index         : 11
  }
};

var StartButton = React.createClass({
  getInitialState: function(){
    return({ modalOpen: false });
  },
  closeModal: function(){
    this.setState({ modalOpen: false })
  },
  openModal: function(){
    this.setState({ modalOpen: true })
  },

  render: function () {
    return (
        <div className="start-button-container">
          <ul>
            <li>

              <img src="https://67.media.tumblr.com/0c7a8025e4c23f9d4fd1e2b0ce7f54c7/tumblr_o6f8src6Se1vns4tpo1_540.png"
                width="50"/>

            </li>
            <li>

              <div className="above-start-button">
                your photo-sharing journey begins here
              </div>

            </li>
            <li>

              <button className="start-button"
                onClick={this.openModal}>
                <span>
                  <div className="start-button-words">
                    lets go
                  </div>
                </span>
              </button>

            </li>

          </ul>

            <Modal
              style={signUpFormModalStyle}
              isOpen={this.state.modalOpen}
              onRequestClose={this.closeModal}>

              <SignUpFormModal parent={this}/>
            </Modal>
        </div>
    );
  }
});

module.exports = StartButton;
