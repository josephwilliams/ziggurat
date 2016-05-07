var React = require('react');
var CommentStore = require('../../stores/comment_store');
var ClientActions = require('../../actions/client_actions');
var PhotoShow = require('./PhotoShow');
// var TimeAgo = require('react-timeago').default;

var PhotoComments = React.createClass({
  getInitialState: function () {
    return ({
      photoId: this.props.id,
      comments: CommentStore.all()
    });
  },

  componentDidMount: function () {
    this.commentsListener = CommentStore.addListener(this.handleChange);
  },

  componentWillUnmount: function () {
    this.commentsListener.remove();
  },

  handleChange: function () {
    this.setState({ comments: CommentStore.all() });
  },

// TODO Refactor the shit out of this :p
  render: function() {
    var photoComments = this.state.comments;
    var comments = photoComments.map(function(comment){
      return (
        <div className="photo-comment" key={comment.id}>
          <div className="photo-comment-container"
             key={comment.id}>

            <div className="comment-username">
              {comment.username}
            </div>
            <div className="comment-body">
              :&nbsp;&nbsp;{comment.comment_body}
            </div>

            <div className="comment-time">

              <TimeAgo date={comment.created_at} />
            </div>
            <div className="clearfix"/>
          </div>
        </div>
      )
    });

    return (
      <div>
        {comments}
      </div>
    );
  }

});

module.exports = PhotoComments;
