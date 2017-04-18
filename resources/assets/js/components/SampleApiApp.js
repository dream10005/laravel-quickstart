var React = require('react');
var SampleApiForm = require('./SampleApiForm');
var SampleApiList = require('./SampleApiList');
var SampleApiStore = require('../stores/SampleApiStore');
var SampleApiActions = require('../actions/SampleApiActions');

var SampleApiApp = React.createClass({     
                                                                                                                                                                                                                                                               // 4 methods ด้านล่างนี้เป็น pattern
    getInitialState: function() {
        return SampleApiStore.getState();
    },
    componentDidMount: function() {
        SampleApiStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        SampleApiStore.removeChangeListener(this._onChange);
    },
    _onChange: function() {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
        this.setState(SampleApiStore.getState());
    },
 
    render: function() {
        
        var comments = SampleApiStore.getAll();
        return (
            <div>
                <SampleApiForm />
                <SampleApiList comments={comments}/>
            </div>
        );
    }
});
 
module.exports = SampleApiApp;