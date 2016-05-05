var React = require('react');
var TagActions = require('../actions/tag_actions');
var ClientActions = require('../actions/client_actions');
var TagStore = require('../stores/tag_store');

var Tags = React.createClass({
  getInitialState: function(){
    return {
      name: "",
      photoId: this.props.imageId,
      tags: this.props.tags
    };
  },

  createTag: function(e){
    e.preventDefault();

    var tags = this.state.name.split(" ");

    for (var i = 0; i < tags.length; i++) {
      TagActions.createTag({
        name: tags[i],
        imageId: this.props.imageId
      });
    }

    this.setState({name: ""});
  },

  changeTagName: function(e){
		this.setState({name: e.target.value});
	},

  render: function() {
    var imageTags = this.props.tags.map(function(tag){
      return(
        <button className="tag">{tag.name}</button>
      );
    });

    return (
      <div>
        {imageTags}
        <form id="tagForm" onSubmit={this.createTag}>
  				<div class="input">
  					<label> Add Tag:
  					<input
              className="tagInput"
              type="text"
              value={this.state.name}
              onChange={this.changeTagName}/>
            </label>
          </div>

          <div class="submitButton">
  					<input type="Submit" id="submitButton" value="Create"/>
          </div>
        </form>
      </div>
    );
  }

});

module.exports = Tags;
