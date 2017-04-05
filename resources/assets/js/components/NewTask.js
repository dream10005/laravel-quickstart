import React , { Component } from 'react';
import { render } from 'react-dom';


const AddTask = ({addTodo}) => {
	let input;
  return (
 		<div className="panel panel-default">
            <div className="panel-heading">
                New Task
            </div>
		<div className="panel-body">
        <div className="form-horizontal">
        <div className="form-group">
        <label for="task-name" className="col-sm-3 control-label">Task</label>
		<div className="col-sm-6">
        <input id="task-name" className="form-control" ref={node => {input = node;}} />
        </div>
        </div>

        <div className="form-group">
        <div className="col-sm-offset-3 col-sm-6">
        <button onClick={() => {addTodo(input.value);
        input.value = ''; }} className="btn btn-default">
        <i className="fa fa-btn fa-plus"></i>Add Task
        </button>
        </div>
        </div>
        </div>
        </div>
        </div>
  );
}

const Todo = ({todo, remove}) => {
  return (<tr>
            <td className="table-text">
            <div>{todo.text}</div>
            </td>
            <td>
			<button className="btn btn-danger" onClick={() => {remove(todo.id)}}>
            <i className="fa fa-btn fa-trash"></i>Delete
            </button>
            </td>
          </tr>);
}

const CurrentTask = ({todos, remove}) => {

  const todoNode = todos.map((todo) => {
    return (<Todo todo = {todo} key={todo.id} remove={remove}/>)
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
                    {todoNode}
                    </tbody>

                </table>
            </div>
            </div>);
}


window.id = 0;
class NewTask extends Component {

	constructor(props) {
    super(props);
	this.state = { data: [] } //state	
}	
	addTodo(val){
    	const todo = {text: val, id: window.id++} //get text
    	this.state.data.push(todo); //update data
    	this.setState({data: this.state.data}); //update state
  }

    handleRemove(id){
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) return todo;
    });
    this.setState({data: remainder});
  }



  render() {
    return (
    	<div className="col-sm-offset-2 col-sm-8">
    	<AddTask addTodo={this.addTodo.bind(this)}/>
    	<CurrentTask
          todos={this.state.data} 
          remove={this.handleRemove.bind(this)}
        />
        </div>

    );
  }
}
export default NewTask