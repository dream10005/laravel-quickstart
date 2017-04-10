var React = require('react');
var DiscussionForm = require('./DiscussionForm.js');
var DiscussionList = require('./DiscussionList.js');
var DiscussionStore = require('./DiscussionStore.js');
var DiscussionActions = require('./DiscussionActions.js');

var DiscussionApp = React.createClass                                                                                                                                                                                                                                                                    // 4 methods ด้านล่างนี้เป็น pattern
    getInitialState: function() {
        return DiscussionStore.getState();
    },
    componentDidMount: function() {
        DiscussionStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        DiscussionStore.removeChangeListener(this._onChange);
    },
    _onChange: function() {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
        this.setState(DiscussionStore.getState());
    },
 
    render: function() {
        
        var comments = DiscussionStore.getAll();
        return (
            <div>
                <DiscussionForm />
                <DiscussionList comments={comments}/>
            </div>
        );
    }
});
 
module.exports = DiscussionApp;