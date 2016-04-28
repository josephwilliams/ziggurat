var React = require('react');
var Modal = require('react-modal');

//Components
var AuthForms = require('./AuthForms');

var AuthModal = React.createClass({
  getInitialState: function(){
    return({ modalOpen: false });
  },
  closeModal: function(){
    this.setState({ modalOpen: false })
  },
  openModal: function(){
    this.setState({ modalOpen: true })
  },
  render: function(){
    return(
      <div className="nav">
        <a onClick={this.openModal}>Sign Up</a>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}>

          <AuthForms/>

        </Modal>
      </div>
    );
  }
});

module.exports = AuthModal;
