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
        <li onClick={this.openModal}>{this.props.text}</li>

        <Modal
          style={this.props.style}
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}>

          <AuthForms/>

        </Modal>
      </div>
    );
  }
});

module.exports = AuthModal;
