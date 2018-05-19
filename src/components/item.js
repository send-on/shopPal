import React from 'react';
import ReactDOM from 'react-dom';
import { Col, Card } from 'react-materialize';

require('../css/item.css');

const Item = ({ item }) => (
  <div className="item-container">
    {item.id}{item.store}{item.item}

  </div>
)
module.exports = Item
