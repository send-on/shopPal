/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import { Footer } from 'react-materialize'
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
import Lists from './components/lists';

// css
require('./css/app.css');

type Props = {||};

class App extends React.Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			window: 'lists',
			lists: [
				{title: "Coworkers", items: [{id: 1, store: 'Safeway', item: "Juice"}]},
				{title: "Roomates", items: [{id: 1, store: 'Safeway', item: "Juice"}]}
			]
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
        component = <Lists lists={this.state.lists}/>
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

				<Footer copyrights="&copy 2015 Copyright Text"
				  moreLinks={
				    <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
				  }
				  links={
				    <ul>
				      <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
				      <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
				      <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
				      <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
				    </ul>
				  }
				  className='main-footer'
					>
				    <h5 className="white-text">Footer Content</h5>
				    <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
				</Footer>;

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
