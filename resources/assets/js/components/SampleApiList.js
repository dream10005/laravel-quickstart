import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SampleApiActions from '../actions/SampleApiActions.js';

var SampleApiComments = React.createClass({
    
    render: function() {
        var comment = this.props.comment;

        return (<tr>
            <td className="table-text">
            <div>{comment.title}</div>
            <div>{comment.ID}</div>
            </td>
            <td>
            <button className="btn btn-danger" onClick={this._onDestroyClick}>
            <i className="fa fa-btn fa-trash"></i>Delete
            </button>
            </td>
          </tr>
        );
    },

    _onDestroyClick() {
    SampleApiActions.deleteTasks(this.props.comment.ID);
  }

});

var SampleApiList = React.createClass({

    render: function() {
        
        var SampleApiComments = this.props.comments.map(function(data, index) {
            return (
                <SampleApiComment key={data.ID} comment={data} index={data.index}/>
            );
        });
        return (
            <div className="panel panel-default">
            <div className="panel-heading">
                Current Tasks
            </div>
            <div className="panel-body">
                <table className="table table-striped task-table">
                    <thead>
                        <th>Task</th>
                        <th>&nbsp;</th>
                    </thead>
                    <tbody>
                    {SampleApiComments}
                    </tbody>

                </table>
            </div>
            </div>
        );
    }
});
 
module.exports = SampleApiList;