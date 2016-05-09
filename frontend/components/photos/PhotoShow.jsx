var React = require('react');
var PhotoStore = require('../../stores/photo_store');
var CommentStore = require('../../stores/comment_store');
var ClientActions = require('../../actions/client_actions');
var HeaderAlt = require('../HeaderAlt');
var PhotoComments = require('./PhotoComments');
var PhotoCommentForm = require('./PhotoCommentForm');
var PhotoLikesHistory = require('./PhotoLikesHistory');
var PhotoTagForm = require('./PhotoTagForm');
var ShowTags = require('./ShowTags');

var PhotoShow = React.createClass({
  getInitialState: function () {
    var potentialPhoto = PhotoStore.find(parseInt(this.props.params.photoId));
    return ({ photo: potentialPhoto ? potentialPhoto : {},
              comments: CommentStore.all() });
  },

  componentDidMount: function () {
    this.photoListener = PhotoStore.addListener(this.handleChange);
    this.commentsListener = CommentStore.addListener(this.handleChangeComments);

    ClientActions.getPhoto(parseInt(this.props.params.photoId));
    ClientActions.getComments(parseInt(this.props.params.photoId));
  },

  handleChange: function () {
    var loadedPhoto = PhotoStore.find(parseInt(this.props.params.photoId));
    var photo = loadedPhoto ? loadedPhoto : {};
    this.setState({ photo: photo });
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

  tagsContainer: function () {
    if (this.state.photo.keys === undefined ){

      return(
        <div>
          <h1>
            NO PHOTO
          </h1>
        </div>
      );
    } else {
      {this.showTags()}
    }
  },

  showTags: function () {
    var tags = this.state.photo.tags.map(function(tag){
      return(
        <div className="tag">
          {tag.name}
        </div>
      );
    });

    return(
      {tags}
    )
  },

  render: function() {
    var tags = (this.state.photo.tags || []);
    var likes = this.state.photo.likes || [];
    var photoId = this.props.params.photoId;

    return (
      <div>
        <div className="show-photo-container">
          <HeaderAlt/>

          <div className="photo-container">
            {this.showContainer()}

            <ShowTags tags={tags} photoId={this.props.params.photoId}/>

            <div className="photo-bottom-padding">
              <div className="photo-bottom-padding-type">
                user:
              </div>
              {this.state.photo.username}
              <div className="photo-bottom-padding-type">
                description:
              </div>
              {this.state.photo.description}

            </div>

              <PhotoComments id={this.props.params.photoId}
                             comments={this.state.comments}/>
              <PhotoTagForm id={this.props.params.photoId}
                            currentUser={this.state.currentUser}/>
              <PhotoCommentForm id={this.props.params.photoId}/>
              <PhotoLikesHistory likes={likes}/>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = PhotoShow;
