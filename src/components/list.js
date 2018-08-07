import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import NewItem from './newitem';
const axios = require('axios');


import Item from './item';
require('../css/list.css');

class List extends React.Component<Props> {
	constructor(props) {
    super(props);
    this.state = {
      list: this.props.list,
    };
    this.getList = this.getList.bind(this);
    this.modifyQuantityServer = this.modifyQuantityServer.bind(this);
  }

  getList(id) {
    axios.get(`/api/lists/${id}`)
    .then(({data}) => {
      this.setState({
        list: data[0]
      })
    })
  }

  modifyQuantityServer(itemId, quantity) {
    const listId = this.props.list.listId;
    const context = this;
		console.log('listId', listId)
		console.log('itemId', itemId)
    axios.patch(`/api/itemqty/${listId}`, {
      itemId: itemId,
      quantity: quantity
    })
    .then((data) => {
      // context.getList(listId);
      console.log('success data ', data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

	_renderItem() {
		return this.state.list.items.map((item, index) => {
			if (item.quantity > 0) {
				return <Item
					className="list-item-col"
					key = {index}
					item = {item}
					modifyQuantityServer = {this.modifyQuantityServer}
				/>
			}
		})
	}

  render() {
    return (
      <div className="list-container">
        <div className="list-title">List: {this.state.list.listTitle}
        </div>
        <div className="list-item-container">
          <NewItem listId = {this.state.list.listId}
            getList = {this.getList}
           />
          {this._renderItem()}
       </div>
      </div>
    )
  }
}

module.exports = List
