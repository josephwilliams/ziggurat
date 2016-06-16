var React = require('react');
var HeaderAlt = require('../HeaderAlt');
var ClientActions = require('../../actions/client_actions');
var SessionStore = require('../../stores/session_store');
var Gallery = require('../flow/Gallery');

var Profile = React.createClass({
  getInitialState: function () {
    return { photos: [],
             currentUser: SessionStore.currentUser() };
  },

  componentDidMount: function () {
    ClientActions.fetchCurrentUser();
    ClientActions.getPhotos();
    this.currentUserListener = SessionStore.addListener(this.updateCurrentUser)
    this.likedPhotosListener = PhotoStore.addListener(this.updatePhotos)
  },

  componentWillUnmount: function() {
    this.likedPhotosListener.remove();
    this.currentUserListener.remove();
  },

  updatePhotos: function () {
    this.setState({ photos: PhotoStore.all() });
  },

  updateCurrentUser: function () {
    this.setState({ currentUser: SessionStore.currentUser() });
  },

  likedPhotos: function () {
    var photos = [];
    for (var i = 0; i < this.state.photos.length; i++) {
      if (this.state.currentUser.liked_photos.indexOf(this.state.photos[i].id) !== -1) {
        photos.push(this.state.photos[i]);
      }
    }

    return photos;
  },

  render: function () {
    var photos = this.likedPhotos();

    return(
      <div className="search-page-container">
        <HeaderAlt/>
        <div className="profile-page">
          <div className="profile-page-text">

            below is a collection of the photos you've liked:
          </div>
        </div>

        <Gallery photos={photos} />
      </div>
    );
  }
});

module.exports = Profile;
