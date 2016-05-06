var React = require('react');
var TagStore = require('../../stores/tag_store');
var ClientActions = require('../../actions/client_actions');
var SessionStore = require('../../stores/session_store');
var TagActions = window.TagStore = require('../../actions/tag_actions');
var PhotoStore = window.PhotoStore = require('../../stores/photo_store');

var ShowTags = React.createClass({
  getInitialState: function () {
    return { tags: this.props.tags }
  },

  componentDidMount: function () {
    this.tagsListener = TagStore.addListener(this.updateTags);
    ClientActions.fetchTags(this.props.photoId);
  },

  updateTags: function () {
    this.setState({ tags: TagStore.all() });
  },

  componentWillUnmount: function () {
    this.tagsListener.remove();
  },

  imageTags: function () {
    var mappedTags;
    if (this.state.tags.length > 0) {
      mappedTags = this.state.tags.map(function(tag){
        return(
          <div className="tag" key={tag.id}>
            {tag.name}
          </div>
        );
      });
    }

    return mappedTags;
  },

  render: function() {
    return (
      <div className="tags-container">
        {this.imageTags()}
      </div>
    );
  }

});

module.exports = ShowTags;
