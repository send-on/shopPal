/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// const {
// 	browserHistory,
//   IndexRoute,
//   // Route,
//   // Router,
// } = require('react-router');

// components
import About from './components/about';
import Header from './components/header';
import AnnouncementBanner from './components/announcement';

// css
require('./css/app.css');

type Props = {||};

class App extends React.Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			window: 'about',
		}
	}

	componentDidMount() {

	}

	render() {
    let component = null;
    switch(this.state.window) {
      case 'about':
        component = <About myState={this.state.window}/>
        break;
      case 'lists':
        // component = <Lists lists={this.state.stories}/>
        break;
			case 'groups':
        // component = <Groups groups={this.state.stories}/>
        break;
    }
		return (
			<div className="main-container">
				<Header />
				<AnnouncementBanner />
				{component}
			</div>

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

// history={browserHistory}
// {/* <Route exact path="/" component={Index}/>
// <Route path="/" component={Header}/> */}
