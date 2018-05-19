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
			window: 'about',
			lists: [
				{title: "Coworkers", items: [{id: 1, store: 'Safeway', item: "Juice", type: "beverage"},
					{id: 2, store: 'Safeway', item: "Bread", type: "pastry"},
					{id: 2, store: 'Safeway', item: "Coke", type: "beverage"},
					{id: 2, store: 'Safeway', item: "Meat", type: "meat"},
					{id: 2, store: 'Safeway', item: "Cookies", type: "dessert"},
				 	{id: 3, store: 'Safeway', item: "Cats", type: "misc"}]},
				{title: "Roomates", items: [{id: 1, store: 'Safeway', item: "Juice", type: "beverage"}]}
			]
		}
		this._handleWindowChange = this._handleWindowChange.bind(this);
	}

	componentDidMount() {
	}

	_handleWindowChange(tab) {
		console.log(tab)
		this.setState({
			window: tab
		})
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
				<Header
				_handleWindowChange={this._handleWindowChange}/>
				<AnnouncementBanner />
				{component}

				<Footer copyrights="Copyright 2018 ShopPal Inc."
				  moreLinks={
				    <a className="grey-text text-lighten-4 right" href="#!">Social Media</a>
				  }
				  links={
				    <ul>
				      <li><a className="grey-text text-lighten-3" href="#!">Help</a></li>
				      <li><a className="grey-text text-lighten-3" href="#!">FAQ</a></li>
				      <li><a className="grey-text text-lighten-3" href="#!">Contact Us</a></li>
				      <li><a className="grey-text text-lighten-3" href="#!">Terms and Conditions</a></li>
				    </ul>
				  }
				  className='main-footer'
					>
				    <h5 className="white-text">ShopPal</h5>
				    <p className="grey-text text-lighten-4">The Future of the Shopping List.</p>
				</Footer>

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
