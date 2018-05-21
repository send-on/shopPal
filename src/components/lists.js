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
			// lists: [
			// 	{listId: 1, title: "Coworkers", items: [{itemId: 1, store: 'Safeway', item: "Juice", type: "beverage"},
			// 		{itemId: 2, store: 'Safeway', item: "Bread", type: "pastry"},
			// 		{itemId: 2, store: 'Safeway', item: "Coke", type: "beverage"},
			// 		{itemId: 2, store: 'Safeway', item: "Meat", type: "meat"},
			// 		{itemId: 2, store: 'Safeway', item: "Cookies", type: "dessert"},
			// 	 	{itemId: 3, store: 'Safeway', item: "Cats", type: "misc"}]},
			// 	{listId: 2, title: "Roomates", items: [{itemId: 1, store: 'Ralphs', item: "Juice", type: "beverage"}]}
			// ]
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


// const Lists = ({ lists }) => (
//   <div className="lists-container">
//     <div className="lists-header">All Lists</div>
//     {lists.map((list, index) =>
//      <List
//      key={index}
//      list={list}
//      />
//    )}
//   </div>
// )

module.exports = Lists
