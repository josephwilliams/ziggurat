var React = require('react');
var CurrentUserState = require('../../mixins/current_user_state');

var PhotoItemSmall = React.createClass({

  likeCount: function () {
    return (
      <div className="like-count">
        0
      </div>
    )
  },

  render: function() {
    var photoURL = "/#/photos/" + this.props.photo.id;
    return (
      <div>
        <a href={photoURL}>
        <img src={this.props.photo.image_url}
             width="500"
             className="photo-item">

          <div className="like-heart">
            {this.likeCount()} ♥
          </div>
        </img>

        </a>
      </div>
    );
  }

});

module.exports = PhotoItemSmall;
