import React from 'react';
import ReactDOM from 'react-dom';


import List from './list';
require('../css/lists.css');

const Lists = ({ lists }) => (
  <div className="lists-container">
    <div className="lists-header">All Lists</div>
    {lists.map((list, index) =>
     <List
     key={index}
     list={list}
     />
   )}
  </div>
)

module.exports = Lists
