var AppDispatcher = require('./AppDispatcher.js');
var DiscussionConstants = require('./DiscussionConstants.js');
 
// setup Store
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = 'change';
 
var _state = {};
var _comments = [];


window.id = 0; 
function addData(comment) {
    var id = window.id++;
    var newMessage = [{
        'ID': id,
        'title': comment
    }];
    _comments = newMessage.concat(_comments);
}

function deleteData(id) {
    // console.log(id);
    // console.log(_comments);
    let index = _comments.findIndex((obj) => obj.ID == id);
    // console.log(index);
    _comments.splice(index,1);
}

var DiscussionStore = assign({}, EventEmitter.prototype, {


    getState: function() {
        return _state;
    },
 
    getAll: function() {
        return _comments;
    },
 
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
 
});
 

AppDispatcher.register(function(action) {
    switch (action.actionType) {
        case DiscussionConstants.DISCUSSION_CREATE:
            addData(action.comment);
            break;
        case DiscussionConstants.DISCUSSION_DELETE:
        console.log("DISCUSSION_DELETE");
            deleteData(action.id);                                                                                                                                                                                                                                                        
            break;
        default:
    }
    

    DiscussionStore.emitChange();
});
 
module.exports = DiscussionStore;