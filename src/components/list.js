import React from 'react';
import ReactDOM from 'react-dom';
// import { Button } from 'react-materialize';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import NewItem from './newitem';

import Item from './item';
require('../css/list.css');

const List = ({ list }) => (
  <div className="list-container">
    <div className="list-title">List: {list.title}
      {/* <Button variant="fab" color="primary" aria-label="add">
        <AddIcon />
      </Button> */}
    </div>
    <div className="list-item-container">
      <NewItem />
      {list.items.map((item, index) =>
       <Item
         className="list-item-col"
         key={index}
         item={item}
       />
     )}
   </div>
  </div>
)

module.exports = List
