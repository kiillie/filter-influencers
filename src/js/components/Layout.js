import React from 'react';
import Tabs from './Tabs';

export default class Layout extends React.Component{
	render(){
		return(
			<Tabs source="http://localhost:3000/users"/>
		);
	}
}