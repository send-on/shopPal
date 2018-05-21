import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');


import List from './list';
require('../css/lists.css');

class Lists extends React.Component<Props> {
	constructor(props) {
		super(props);
    this.state = {
			user: 'Sign in',
			window: 'lists',
      lists: [],
		}
    this._getLists = this._getLists.bind(this)
  }

  componentDidMount() {
    this._getLists();
  }

  _getLists() {
    axios.get('/api/lists')
    .then(({data}) => {
      this.setState({
        lists: data
      })
    })
  }

  render() {
    return (
      <div className="lists-container">
        <div className="lists-header">Your Lists</div>
        {this.state.lists.map((list, index) =>
         <List
         key={index}
         list={list}
         />
       )}
      </div>
    )
  }
}

module.exports = Lists
