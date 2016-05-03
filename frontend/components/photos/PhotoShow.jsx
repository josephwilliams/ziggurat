var React = require('react');
var PhotoStore = require('../../stores/photo_store');
var ClientActions = require('../../actions/client_actions');
var HeaderAlt = require('../HeaderAlt');

var PhotoShow = React.createClass({
  getInitialState: function () {
    var potentialPhoto = PhotoStore.find(this.props.params.photoId);
    return ({ photo: potentialPhoto ? potentialPhoto : {} });
  },

  componentDidMount: function () {
    ClientActions.getPhotos();
    ClientActions.getPhoto(parseInt(this.props.params.photoId));
    var photoListener = PhotoStore.addListener(this.handleChange);
  },

  componentWillUnmount: function () {
    photoListener.remove();
  },

  handleChange: function () {
    var loadedPhoto = PhotoStore.find(this.props.params.photoId);
    this.setState({ photo: loadedPhoto })
  },

  showContainer: function () {
    if (this.state.photo === {}){
      return(
        <div>
          <h3>
            No photos here!
          </h3>
          <h4>

          </h4>
        </div>
      )
    } else {
      return(
        <img src={this.state.photo.image_url}/>
      )
    }
  },

  render: function() {
    console.log(this.props.path);
    return (
      <div>
        <div className="show-photo-container">
          <HeaderAlt/>
          <div className="photo-container">

            {this.showContainer()}

          </div>
        </div>
      </div>
    );
  }

});

module.exports = PhotoShow;
