var React = require('react');
var CurrentUserState = require('../../mixins/current_user_state');

var PhotoItemSmall = React.createClass({
  // getInitialState: function () {
  //   return { photo: this.props.photo }
  // },

  // componentDidMount: function () {
  //   var photo = this.props.photo;
  //   this.like_count = photo
  // },

  likeCount: function () {
    var photo = this.props.photo;
    console.log(photo.likes);
    return (
      <div className="like-count">
        0
      </div>
    )
  },

  handleLike: function () {

  },

  render: function() {
    var photoURL = "/#/photos/" + this.props.photo.id;
    return (
      <div>
      <div className="photo-item">
        <a href={photoURL}>
        <img src={this.props.photo.image_url}
             width="500"
             />
        </a>
      </div>

          <div className="like-heart"
               onClick={this.handleLike}>
            {this.likeCount()} ♥
          </div>


    </div>
    );
  }

});

module.exports = PhotoItemSmall;
