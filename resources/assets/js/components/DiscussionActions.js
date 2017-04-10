var AppDispatcher = require('./AppDispatcher.js');
var DiscussionConstants = require('./DiscussionConstants.js');
 
// รวม Action ต่างๆ ในแอป
var DiscussionActions = {
 
    addComment: function(comment) {
        AppDispatcher.dispatch({
            actionType: DiscussionConstants.DISCUSSION_CREATE,
            comment: comment,
        });
    },

    deleteData: function(id){
        console.log("deleteData");
        console.log(DiscussionConstants.DISCUSSION_DELETE);
    	AppDispatcher.dispatch({
    		actionType: DiscussionConstants.DISCUSSION_DELETE,
    		id: id,
		});
    }
 
};
 
module.exports = DiscussionActions;