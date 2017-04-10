import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import DiscussionApp from './DiscussionApp.js';

 
class FluxApp extends Component {
	render() {
    return (
    	<div className= "col-sm-offset-2 col-sm-8" >
    	<DiscussionApp />
        </div>
	);
 	}
}
export default FluxApp
