import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Search from './components/Search'
const index = document.getElementById('container');
ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={Login} />
		<Route path="/dashboard" component={Dashboard} />
		<Route path="/search" component={Search} />
	</Router>
), index);