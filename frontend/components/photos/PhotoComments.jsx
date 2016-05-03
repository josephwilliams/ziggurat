var React = require('react');
var CommentStore = require('../../stores/comment_store');
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
    var commentsListener = CommentStore.addListener(this.handleChange);
    ClientActions.getComments(this.state.photoId);
  },


  handleChange: function () {
    this.setState({ comments: CommentStore.all() });
  },

  render: function() {
    console.log(this.props.params);
    var photoComments = this.state.comments;
    var comments = photoComments.map(function(comment){
      console.log("comment:" + comment.commentBody);
      return (<div className="photo-comment"
                   key={comment.id}>
                <p>
                  {comment.commentBody}
                </p>
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
