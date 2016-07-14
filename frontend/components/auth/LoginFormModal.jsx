var React = require('react');
var Modal = require('react-modal');
var LoginForm = require('./LoginForm');

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
    position              : 'fixed',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    border                : '1px solid #ccc',
    width                 : '500px',
    padding               : '20px 20px 30px 20px',
    boxShadow             : '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);'
    // z-index         : 11
  }
};

var LoginFormModal = React.createClass({
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

          <LoginForm parent={this}/>

        </Modal>
      </div>
    );
  }
});

module.exports = LoginFormModal;
