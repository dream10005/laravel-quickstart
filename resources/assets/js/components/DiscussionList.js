import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DiscussionActions from './DiscussionActions.js';

var DiscussionComment = React.createClass({
    
    render: function() {
        var comment = this.props.comment;

        return (<tr>
            <td className="table-text">
            <div>{comment.title}</div>
            <div>{comment.ID}</div>
            <div>index : {comment.index}</div>
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
    DiscussionActions.deleteData(this.props.comment.ID);
  }

});

var DiscussionList = React.createClass({
    render: function() {
        
        var DiscussionComments = this.props.comments.map(function(data, index) {
            return (
                <DiscussionComment key={data.ID} comment={data} index={data.index}/>
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
                    {DiscussionComments}
                    </tbody>

                </table>
            </div>
            </div>
        );
    }
});
 
module.exports = DiscussionList;