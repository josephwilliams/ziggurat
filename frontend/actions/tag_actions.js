var TagConstants = require('../constants/tag_constants');
var TagStore = require('../stores/tag_store');
var AppDispatcher = require('../dispatcher/dispatcher');

var TagActions = {

  receiveTag: function(tag){
 		AppDispatcher.dispatch({
 			actionType: TagConstants.CREATE_TAG,
 			tag: tag
 		});
 	},

   receiveTags: function(tags){
 		AppDispatcher.dispatch({
 			actionType: TagConstants.RECEIVE_TAGS,
 			tags: tags
 		});
 	},

   removeTag: function(tag){
 		AppDispatcher.dispatch({
 			actionType: TagConstants.REMOVE_TAG,
 			tag: tag
 		});
 	}

};

module.exports = TagActions;
