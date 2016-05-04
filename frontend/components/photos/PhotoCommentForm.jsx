var React = require('react');
var CommentStore = require('../../stores/comment_store');
var ClientActions = require('../../actions/client_actions');
var SessionStore  = require('../../stores/session_store');

var PhotoCommentForm = React.createClass({
  getInitialState: function () {
    var photoId = this.props.id;
    return ({
      commentBody: "",
      photoId: photoId,
      currentUser: SessionStore.currentUser()
    });
  },

  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this.findCurrentUser);
    ClientActions.fetchCurrentUser();
  },

  componentWillUnmount: function () {
    this.sessionListener.remove();
  },

  findCurrentUser: function () {
    this.setState({ currentUser: SessionStore.currentUser() });
  },

  commentForm: function () {
    return(
      <div className="comment-form">
        <form onSubmit={this.submitCommentForm}>
            <textarea
                   value={this.state.commentBody}
                   onChange={this.changeComment}
                   className="comment-form-input"
                   placeholder="Leave a comment!"/>


          <button onClick={this.submitCommentForm}
                  className="comment-form-button">
                submit</button>

              <div className="face-line">
                  <div className="face">😈</div>
                  <div className="face">👿</div>
                  <div className="face">😍</div>
                  <div className="face">😂</div>
                  <div className="face">😳</div>
                  <div className="face">😢</div>
                </div>
        </form>
      </div>
    )
  },

  changeComment: function (event) {
    this.setState({ commentBody: event.target.value });
  },

  submitCommentForm: function (event) {
    event.preventDefault();
    var commentData = {
      photoId: this.state.photoId,
      commentBody: this.state.commentBody,
      userId: this.state.currentUser.id
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
