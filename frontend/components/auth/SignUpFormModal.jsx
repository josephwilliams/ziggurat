var React = require('react');
var Modal = require("react-modal");
var SignUpForm = require('./SignUpForm');

var modalStyle = {
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
    top             : '15%',
    bottom          : '36%',
    left            : '20%',
    right           : '20%',
    border          : '1px solid #ccc',
    // z-index         : 11
  }
};


var SignUpFormModal = React.createClass({
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
      <div>
        <li onClick={this.openModal}>{this.props.text}</li>

        <Modal
          style={modalStyle}
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}>

          <SignUpForm/>

        </Modal>
      </div>
    );
  }
});

module.exports = SignUpFormModal;
