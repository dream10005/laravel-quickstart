import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import NewTask from './components/NewTask';
import FluxApp from './components/FluxApp';

render((
	<Router history={browserHistory}>
<Route path='/react' component={NewTask}></Route>
<Route path='/flux' component={FluxApp}></Route>
    </Router>

), document.getElementById('container'));
