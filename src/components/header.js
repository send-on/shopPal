import React from 'react';
import ReactDOM from 'react-dom';
import { Icon, Button } from 'react-materialize';

require('../css/header.css');

const Header = ({ _handleWindowChange, user, signInWithGoogle}) => (
  <div className="main-container">
    <div className="header-container">
      <div className="header-left">
        <div className="header-icon">
          <Icon small>perm_identity</Icon>
          <div className="header-text" onClick={() => signInWithGoogle()}>{user}</div>
        </div>

      </div>
      <div className="header-center">
        Logo
      </div>
      <div className="header-right">
        <div className="header-icon">
          <Icon small >store</Icon>
        </div>
        <div className="header-icon" onClick={() => _handleWindowChange('lists')}>
          <Icon small >library_books</Icon>
        </div>
        <div className="header-icon" onClick={() => _handleWindowChange('about')}>
          <Icon small >group</Icon>
        </div>
      </div>
    </div>
  </div>
)

module.exports = Header
