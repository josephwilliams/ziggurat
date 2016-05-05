var AppDispatcher = require('../dispatcher/dispatcher');
var ServerActions = require('../actions/server_actions');
var TagActions = require('../actions/tag_actions');

var TagApiUtil = {
	createTag: function(data){
		$.ajax({
			url: "/api/tags",
			type: "POST",
			data: {tag: data},
			success: function(tag){
				ServerActions.receiveTag(tag);
			},
		});
	},

	fetchTags: function(){
		$.ajax({
			url: '/api/tags',
			type: "GET",
			success: function(tags){
				TagActions.receiveTags(tags);
			},
		});
	},

	removeTag: function(tagId){
		$.ajax({
			url: '/api/tags' + tagId.toString(),
			type: "GET",
			success: function(tag){
				TagActions.removeTag(tag);
			}
		});
	}
};

module.exports = TagApiUtil;
