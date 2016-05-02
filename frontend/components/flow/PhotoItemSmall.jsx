var React = require('react');

var PhotoItemSmall = React.createClass({

  render: function() {
    var photoURL = "/#/photos/" + this.props.photo.id;
    return (
      <div className="gallery-photo">
        <a href={photoURL}>
          <img src={this.props.photo.image_url} width="500" />
        </a>
      </div>
    );
  }

});

module.exports = PhotoItemSmall;
