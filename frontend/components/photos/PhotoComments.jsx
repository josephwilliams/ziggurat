var React = require('react');
var CommentStore = require('../../stores/comment_store');
var ClientActions = require('../../actions/client_actions');
var PhotoShow = require('./PhotoShow');
var TimeAgo = require('react-timeago').default;

var PhotoComments = React.createClass({
  getInitialState: function () {
    return ({
      photoId: this.props.id,
      comments: this.props.comments
    });
  },

  componentDidMount: function () {
    ClientActions.getComments(this.state.photoId);
    this.commentsListener = CommentStore.addListener(this.handleChange);
  },

  componentWillUnMount: function () {
    this.commentsListener.remove();
  },

  handleChange: function () {
    this.setState({ comments: CommentStore.all() });
  },

  render: function() {
    var photoComments = this.state.comments;
    var comments = photoComments.map(function(comment){
      return (<div className="photo-comment">
                <div className="photo-comment-container"
                   key={comment.id}>

                  <div className="comment-username">
                    {comment.username}
                  </div>
                  <div className="comment-body">
                    :&nbsp;&nbsp;{comment.comment_body}
                  </div>

                  <div className="comment-time">

                    <TimeAgo date={comment.created_at}/>
                  </div>

                  <div class="clearfix"/>
                </div>
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
