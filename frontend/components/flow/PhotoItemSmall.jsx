var React = require('react');
var CurrentUserState = require('../../mixins/current_user_state');
var SessionStore = require('../../stores/session_store');
var PhotoStore = window.PhotoStore = require('../../stores/photo_store');
var ClientActions = require('../../actions/client_actions');

var PhotoItemSmall = React.createClass({

  getInitialState: function () {
    return { currentUser: SessionStore.currentUser() }
  },

  componentDidMount: function () {
    this.userListener = SessionStore.addListener(this.userChange);
    // this.photoListener = PhotoStore.addListener(this.photoUpdate);
    // ClientActions.getPhoto(parseInt(this.props.photo.id));
  },

  userChange: function () {
    this.setState({ currentUser: SessionStore.currentUser() });
  },

  componentWillUnmount: function () {
    this.userListener.remove();
    // this.photoListener.remove();
  },

  likeCount: function () {
    return (
      <div className="like-count">
        {this.props.photo.like_count}
      </div>
    )
  },

  toggleLike: function () {
    var data = {photo_id: this.props.photo.id};

    if (this._isLiked() === "liked"){
      ClientActions.createLike(data);
    } else {
      ClientActions.destroyLike(data);
    }
  },

  _isLiked: function () {
    var isLiked = "liked";
    var currentUser = this.state.currentUser;

    if (currentUser){
      var userLikedPhotos = currentUser.liked_photos;
      if (userLikedPhotos.indexOf(this.props.photo.id) !== -1) {
        isLiked = "unliked";
      }
    }

    return isLiked;
  },

  _isLikedHeart: function () {
    if (this._isLiked() === "unliked"){
      return (
        <div className="unliked-like-heart"
             onClick={this.toggleLike}>
          {this.likeCount()} ♥
          {this.commentCount()}
        </div>
      );
    } else {
      return (
        <div className="liked-like-heart"
             onClick={this.toggleLike}>
          {this.likeCount()} ♥
          {this.commentCount()}
        </div>
      );
    }
  },

  commentCount: function () {
    return (
      <div className="comment-count">
        {this.props.photo.comment_count}&nbsp;💬
      </div>
    )
  },

  render: function() {
    var photoURL = "/#/photos/" + this.props.photo.id;
    return (
      <div>
      <div className="photo-item">
        <a href={photoURL}>
        <img src={this.props.photo.image_url}
             width="490"
             />
        </a>
      </div>
          {this._isLikedHeart()}


    </div>
    );
  }

});

module.exports = PhotoItemSmall;
