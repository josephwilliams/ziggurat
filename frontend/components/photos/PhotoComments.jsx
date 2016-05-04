var React = require('react');
var CommentStore = window.CommentStore = require('../../stores/comment_store');
var ClientActions = require('../../actions/client_actions');
var PhotoShow = require('./PhotoShow');

var PhotoComments = React.createClass({
  getInitialState: function () {
    return ({
      photoId: this.props.id,
      comments: []
    });
  },

  componentDidMount: function () {
    console.log("photoID:" + this.state.photoId);
    this.commentsListener = CommentStore.addListener(this.handleChange);
    ClientActions.getComments(parseInt(this.state.photoId));

    console.log(this.state.comments);
  },

  handleChange: function () {
    this.setState({ comments: CommentStore.all() });
  },

  render: function() {
    var photoComments = this.state.comments;
    var comments = photoComments.map(function(comment){
      return (<div className="photo-comment"
                   key={comment.id}>

                  <div className="comment-username">
                    {comment.username}
                  </div>
                   :&nbsp;&nbsp;{comment.comment_body}

              </div>)
    });

    return (
      <div>
        {comments}
      </div>
    );
  }

});

module.exports = PhotoComments;
