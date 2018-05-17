/* @flow */

import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//css
require('./css/header.css');

type Props = {||};

class Header extends React.Component<Props> {
	render() {
		return (
			<div className="headerContainer">
        Stuff in here
      </div>
		)
	}
}

module.exports = Header
