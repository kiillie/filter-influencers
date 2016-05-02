import React from 'react';

export default class Tab extends React.Component{
	handleClick(e){
		this.props.changeTab(this.props.title);
		this.props.changeLink(this.props.link);
		e.preventDefault();
	}
	render(){
		return(
			<li><a href={this.props.link} onClick={this.handleClick.bind(this)}>{this.props.title}</a></li>
		);
	}
}