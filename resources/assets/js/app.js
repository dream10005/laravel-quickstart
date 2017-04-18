import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import NewTask from './components/NewTask';
import FluxApp from './components/FluxApp';

import TaskListContainer from './components/tasks/TaskListContainer';
import TaskList from './components/tasks/TaskList';

render((
	<Router history={browserHistory}>
		<Route path='/react' component={NewTask}></Route>
		<Route path='/flux' component={FluxApp}></Route>
		<Route component={TaskListContainer}>
			<Route path='/rest' component={TaskList}></Route>
		</Route>
    </Router>

), document.getElementById('container'));
