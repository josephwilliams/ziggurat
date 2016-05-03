var React = require('react');
var CommentStore = require('../../stores/comment_store');
var ClientActions = require('../../actions/client_actions');

var PhotoCommentForm = React.createClass({
  getInitialState: function () {
    var photoId = this.props.photo.id;
    return {
      commentBody: "",
      photoId: photoId
    }
  },

  commentForm: function () {
    return(
      <form onSubmit={this.submitCommentForm}>
        <label>Comment:
        <input type="text"
               value={this.state.commentBody}
               onChange={this.changeComment}/>
        </label>

        <input type="submit" value="submit"/>
      </form>
    )
  },

  changeComment: function () {
    this.setState({ commentBody: this.target.value });
  },

  submitCommentForm: function (event) {
    event.preventDefault();
    var commentData = {
      photoId: this.state.photoId,
      commentBody: this.state.commentBody
    };
    ClientActions.postComment(commentData);

    this.setState({
      commentBody: ""
    });
  },

  render: function() {
    return (
      <div>
        {this.commentForm()}
      </div>
    );
  }

});

module.exports = PhotoCommentForm;
