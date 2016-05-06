var React = require('react');
var ClientActions = require('../../actions/client_actions');
var SessionStore  = require('../../stores/session_store');
var TagActions = require('../../actions/tag_actions');
var TagStore = require('../../stores/tag_store');

var PhotoTagForm = React.createClass({
  getInitialState: function () {
    return ({ tags: "" });
  },


  // faces: function () {
  //   return(
  //     <div className="face-line">
  //         <div className="face">😈</div>
  //         <div className="face">👿</div>
  //         <div className="face">😍</div>
  //         <div className="face">😂</div>
  //         <div className="face">😳</div>
  //         <div className="face">😢</div>
  //       </div>
  //   );
  // },

  tagForm: function () {
    return(
      <div className="tag-form">
        <form onSubmit={this.handleTagSubmits}>
            <input type="text"
                   value={this.state.tags}
                   onChange={this.changeTags}
                   className="tag-form-input"
                   placeholder="Add one or many tags separated by a space"/>

          <button className="comment-form-button">
            tag
          </button>
        </form>
      </div>
    )
  },

  changeTags: function (event) {
    this.setState({ tags: event.target.value });
  },

  handleTagSubmits: function (event) {
    event.preventDefault();
    var tags = this.state.tags.split(" ");

    for (var i = 0; i < tags.length; i++) {
      this.submitTag(tags[i]);
    }

    this.setState({
      tags: ""
    });
  },

  submitTag: function (tag) {
    var tagData = {
      photo_id: parseInt(this.props.id),
      name: tag
    };

    ClientActions.createTag(tagData);
  },

  render: function() {
    return (
      <div>
        {this.tagForm()}
      </div>
    );
  }

});

module.exports = PhotoTagForm;
