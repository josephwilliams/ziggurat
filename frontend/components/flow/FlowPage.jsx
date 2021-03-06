var React = require('react');
var Masonry = require('react-masonry-component');
var PhotoStore = require('../../stores/photo_store');
var ClientActions = require('../../actions/client_actions');
var CurrentUserState = require('../../mixins/current_user_state');
var HeaderAlt = require('../HeaderAlt');
var Gallery = require('./Gallery');

var FlowPage = React.createClass({
  // mixins: [CurrentUserState],

  getInitialState: function () {
    return { photos: PhotoStore.all() };
  },

  componentDidMount: function () {
    ClientActions.getPhotos();
    this.photosListener = PhotoStore.addListener(this.updatePhotos)
  },

  componentWillUnmount: function() {
    this.photosListener.remove();
  },

  updatePhotos: function () {
    this.setState({ photos: PhotoStore.all() });
    this.forceUpdate();
  },

  postPhoto: function (photoData) {
    // called after successful upload via cloudinary widget
    ClientActions.postPhoto(photoData);
  },

  render: function () {
    var photos = this.state.photos;
    var photoFlow = photos.map(function(photo){
      return (<img src={photo.image_url}
                   width="300"
                   key={photo.id}/>)
    });
    var currentUser = this.props.currentUser;

    return(
      <div className="photo-flow-container">

        <HeaderAlt/>

        <Gallery photos={photos} />
      </div>
    )
  }
});

module.exports = FlowPage;
