/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const {
	browserHistory,
  IndexRoute,
  // Route,
  // Router,
} = require('react-router');

// components
import Index from './index';
import Header from './header';

// css
require('./css/app.css');

type Props = {||};

class App extends React.Component<Props> {
	render() {
		return (
			<Router history={browserHistory}>
				<div className="mainContainer">
					<Route path="/" component={Header}/>


					<Route exact path="/" component={Index}/>
				</div>
			</Router>
		)
	}
}

const dom = document.getElementById('App')
if (dom === null) {
	//Error
	console.error("dom does not exist")
} else {
	ReactDOM.render(<App />, dom);
}
