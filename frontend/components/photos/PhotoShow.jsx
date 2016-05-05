var React = require('react');
var PhotoStore = window.PhotoStore = require('../../stores/photo_store');
// TODO remove this window.commentstore
var CommentStore = window.CommentStore = require('../../stores/comment_store');
var ClientActions = require('../../actions/client_actions');
var HeaderAlt = require('../HeaderAlt');
var PhotoComments = require('./PhotoComments');
var PhotoCommentForm = require('./PhotoCommentForm');
var PhotoLikesHistory = require('./PhotoLikesHistory');

var PhotoShow = React.createClass({
  getInitialState: function () {
    var potentialPhoto = PhotoStore.find(parseInt(this.props.params.photoId));
    return ({ photo: potentialPhoto ? potentialPhoto : {},
              comments: CommentStore.all() });
  },

  componentDidMount: function () {
    ClientActions.getPhoto(parseInt(this.props.params.photoId));
    ClientActions.getComments(parseInt(this.props.params.photoId));

    this.photoListener = PhotoStore.addListener(this.handleChange);
    this.commentsListener = CommentStore.addListener(this.handleChangeComments);
  },

  handleChange: function () {
    var loadedPhoto = PhotoStore.find(parseInt(this.props.params.photoId));
    this.setState({ photo: loadedPhoto });
  },

  handleChangeComments: function () {
    this.setState({ comments: CommentStore.all() });
  },

  componentWillUnmount: function () {
    this.photoListener.remove();
    this.commentsListener.remove();
  },

  showContainer: function () {
    if (this.state.photo === undefined){
      return(
        <div>
          <h3 className="bad-load">
            <center>
              No photos here!
            </center>
          </h3>
        </div>
      )
    } else {
      return(
        <div className="big-photo">
          <img src={this.state.photo.image_url}/>
        </div>
      )
    }
  },

  render: function() {
    var likes = this.state.photo.likes || [];
    var photoId = this.props.params.photoId;

    return (
      <div>
        <div className="show-photo-container">
          <HeaderAlt/>

          <div className="photo-container">
            {this.showContainer()}

            <div className="photo-bottom-padding"/>

              <PhotoComments id={this.props.params.photoId}
                             comments={this.state.comments}/>
              <PhotoCommentForm id={this.props.params.photoId}/>
              <PhotoLikesHistory likes={likes}/>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = PhotoShow;
