import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

class TaskListItem extends Component {
    render() {
        return (
            <tr>
                <td className="table-text">
                    <div>ID: {this.props.task.id}</div>
                    <div>{this.props.task.name}</div>
                </td>
                <td>
                    <button className="btn btn-danger">
                        <i className="fa fa-btn fa-trash"></i>Delete
                    </button>
                </td>
            </tr>
        );
    }
}

TaskListItem.propTypes = {
    task: React.PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string
    })
}

export default TaskListItem;