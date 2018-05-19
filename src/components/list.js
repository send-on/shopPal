import React from 'react';
import ReactDOM from 'react-dom';

import Item from './item';
require('../css/list.css');

const List = ({ list }) => (
  <div className="list-container">
    {list.title}
    {list.items.map((item, index) =>
     <Item
     key={index}
     item={item}
     />
   )}

  </div>
)

module.exports = List
