var React = require('react');

var PhotoItemSmall = React.createClass({

  render: function() {
    return (
      <div className="gallery-photo">
        <img src={this.props.photo.image_url} width="500" />
      </div>
    );
  }

});

module.exports = PhotoItemSmall;
