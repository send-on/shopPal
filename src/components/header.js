import React from 'react';
import ReactDOM from 'react-dom';
import { Icon, Button } from 'react-materialize';
// import * as firebase from 'firebase';
//
// const config = {
//   apiKey: "AIzaSyClucTxjh5554-624-Ihd6GbYEs-L0dM0c",
//   authDomain: "shop-pal-87d94.firebaseapp.com",
//   databaseURL: "https://shop-pal-87d94.firebaseio.com",
//   storageBucket: "",
// };
//
// const fb = firebase
//   .initializeApp(config)
//   .database()
//   .ref();


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
