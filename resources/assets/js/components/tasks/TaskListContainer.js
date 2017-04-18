import React, { Component, PropTypes } from 'react';
import { Container } from 'flux/utils';
import TaskStore from '../../stores/TaskStore';
import SampleApiActions from '../../actions/SampleApiActions';

class TaskListContainer extends Component {
  componentDidMount() {
    SampleApiActions.getTasks();
  }

  render() {
    let content = this.props.children && React.cloneElement(this.props.children, {
      tasks: this.state.taskStoreState.tasks
    });

    return content;
  }
}

TaskListContainer.getStores = () => ([TaskStore]);
TaskListContainer.calculateState = (prevState) => ({
  taskStoreState: TaskStore.getState()
});

export default Container.create(TaskListContainer);