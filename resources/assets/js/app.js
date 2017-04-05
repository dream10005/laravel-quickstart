import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import NewTask from './components/NewTask';

render((
	<Router history={browserHistory}>
<Route path='/react' component={NewTask}></Route>
    </Router>

), document.getElementById('container'));
