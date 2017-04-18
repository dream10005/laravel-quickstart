var React = require('react');
var SampleApiActions = require('../actions/SampleApiActions.js');
 
var SampleApiForm = React.createClass({
 
    getInitialState: function() {
        return {
            message: ''
        };
    },
 
    _onChange: function(event) {
        this.setState({
            message: event.target.value
        });
    },
 
    _onSubmit: function(event) {
        event.preventDefault();
        SampleApiActions.addComment(this.state.message);

        this.setState({
            message: ''
        });
    },
 
    render: function() {
        return (
            <div className="panel panel-default">
            <div className="panel-heading">
                New Task
            </div>
            <div className="panel-body">
                <form onSubmit={this._onSubmit} className="form-horizontal">
                <div className="form-group">
                <label for="task-name" className="col-sm-3 control-label">Task</label>
                <div className="col-sm-6">
                <input type="text" id="task-name" className="form-control" onChange={this._onChange} value={this.state.message} />
                </div>
                </div>

                <div className="form-group">
                <div className="col-sm-offset-3 col-sm-6">
                <button onClick={this._onSubmit} className="btn btn-default">
                <i className="fa fa-btn fa-plus"></i>Add Task
                </button>
                </div>
                </div>
                </form>
            </div>
            </div>
        );
    }
});
 
module.exports = SampleApiForm;