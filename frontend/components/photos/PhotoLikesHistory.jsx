var React = require('react');
var CommentStore = require('../../stores/comment_store');
var PhotoStore = require('../../stores/photo_store');
var ClientActions = require('../../actions/client_actions');
var PhotoShow = require('./PhotoShow');
// var TimeAgo = require('react-timeago').default;

var PhotoLikesHistory = React.createClass({

  render: function() {
    var likes = this.props.likes.map(function(like){
      return (
        <div className="photo-comment" key={like.id}>
          <div className="like-comment-container">

            <div className="photo-liker">
              <div className="liked-by">
                Liked by:&nbsp;&nbsp;
              </div>
              {like.username}
            </div>

            <div className="like-time">

              {like.created_at}
            </div>

            <div className="clearfix"/>
          </div>
        </div>)
      });

    return (
      <div>
        {likes}
      </div>);
  }

});

module.exports = PhotoLikesHistory;
