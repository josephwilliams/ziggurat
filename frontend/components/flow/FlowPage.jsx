var React = require('react');
var PhotoStore = require('../../stores/photo_store');
var ClientActions = require('../../actions/client_actions');

var FlowPage = React.createClass({
  getInitialState: function () {
    return { photos: [] };
  },

  componentDidMount: function () {
    var photosListener = PhotoStore.addListener(this.updatePhotos)
    ClientActions.getPhotos();
  },

  updatePhotos: function () {
    this.setState({ photos: PhotoStore.all() });
  },

  render: function () {
    var photos = this.state.photos;
    var photoFlow = photos.map(function(photo){
      return (<img src={photo.image_url}
                  width="300"
                  key={photo.id}/>)
    });

    return(
      <div>
        <br/>
        <br/>
        <br/>
        <div className="photo-flow">

          <h3>FLOW</h3>
          {photoFlow}
        </div>
      </div>
    )
  }
});

module.exports = FlowPage;
