import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import TaskListItem from './TaskListItem'

class TaskList extends Component {
	render() {
		let taskList = this.props.tasks.map(function(obj) {
            return (<TaskListItem key={obj.id} task={obj} />);
        });
		return (
			<div>
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
	                    		{taskList}
	                    	</tbody>
						</table>
	            	</div>
	            </div>
            </div>
		);
	}
}

TaskList.propTypes = {
	tasks: React.PropTypes.array
}

export default TaskList;