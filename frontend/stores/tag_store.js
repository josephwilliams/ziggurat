var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var TagStore = new Store(AppDispatcher);

var _tags = {};
var _taggings = {};

TagStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "CREATE_TAG":
    	TagStore.addTag(payload.tag);
      break;
    case "RECEIVE_TAGS":
      TagStore.resetTags();
    	TagStore.addTags(payload.tags);
      break;
    case "REMOVE_TAG":
    	TagStore.removeTag(payload.tag);
      break;
  }
  TagStore.__emitChange();
};

TagStore.all = function () {
  var tags = [];

  for (var i in _tags) {
    if (_tags.hasOwnProperty(i)) {
      tags.push(_tags[i]);
    }
  }
  return tags;
};

TagStore.resetTags = function () {
  _tags = {};
};

TagStore.findById = function(id){
  return _tags[id];
};

TagStore.addTag = function(tag){
  _tags[tag.id] = tag;
};

TagStore.removeTag = function(tag){
  _tags[tag.id].remove;
};

TagStore.addTags = function(tags){
  for (var i = 0; i < tags.length; i++) {
    _tags[tags[i].id] = tags[i];
  }
};

module.exports = TagStore;
