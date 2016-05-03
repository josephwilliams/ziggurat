var React = require('react');
var PhotoStore = require('../../stores/photo_store');
var ClientActions = require('../../actions/client_actions');
var HeaderAlt = require('../HeaderAlt');
var PhotoComments = require('./PhotoComments');
var PhotoCommentForm = require('./PhotoCommentForm');

var PhotoShow = React.createClass({
  getInitialState: function () {
    var potentialPhoto = PhotoStore.find(this.props.params.photoId);
    return ({ photo: potentialPhoto ? potentialPhoto : {} });
  },

  componentDidMount: function () {
    // ClientActions.getPhotos();
    ClientActions.getPhoto(parseInt(this.props.params.photoId));
    this.photoListener = PhotoStore.addListener(this.handleChange);
  },

  handleChange: function () {
    var loadedPhoto = PhotoStore.find(this.props.params.photoId);
    this.setState({ photo: loadedPhoto })
  },

  // componentWillUnmount: function () {
  //   this.photoListener.remove;
  // },

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
    console.log("photo id:" + this.state.photo.id)
    console.log("params.photoId:" + this.props.params.photoId)
    var photoId = this.props.params.photoId;
    return (
      <div>
        <div className="show-photo-container">
          <HeaderAlt/>
          <div className="photo-container">

            {this.showContainer()}

            <div className="photo-bottom-padding"/>


              <PhotoComments id={photoId}/>


          </div>
        </div>
      </div>
    );
  }

});

module.exports = PhotoShow;
