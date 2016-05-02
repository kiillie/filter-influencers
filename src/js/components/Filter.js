import React from 'react';
import $ from 'jquery';

export default class Filter extends React.Component{
	constructor() {
		super();
		this.state = {
			users: []
		}
	}
	changeValue(e){
		var value = e.target.value;
		var link = this.props.link;
		var filterusers = [];
		if(link == "byvalue"){
			if(value == 1){
				var max = 1000;
				var min = 0;
				filterusers = this.props.users.filter(
					(user) => {
						return (user.value >= min && user.value < max);
					}
				)
			}
			else if(value == 2){
				var max = 5000;
				var min = 1000;
				filterusers = this.props.users.filter(
					(user) => {
						return (user.value >= min && user.value < max);
					}
				)
			}
			else if(value == 3){
				var max = 10000;
				var min = 5000;
				filterusers = this.props.users.filter(
					(user) => {
						return (user.value >= min && user.value < max);
					}
				)
			}
			else if(value == 4){
				var min = 10000;
				filterusers = this.props.users.filter(
					(user) => {
						return (user.value >= min);
					}
				)
			}
		}
		else if(link == "bylocation"){
			console.log("By Location");
		}
		else if(link == "byzip"){
			filterusers = this.props.users.filter(
				(user) => {
					return user.zip.toString().indexOf(value.toString()) !== -1;
				}
			)
		}
		else if(link == "byinfluence"){
			if(value == 1){
				filterusers = this.props.users.filter(
					(user) => {
						return (user.value >= 0 && user.value < 500);
					}
				)
			}
			else if(value == 2){
				filterusers = this.props.users.filter(
					(user) => {
						return (user.value >= 500 && user.value < 1000);
					}
				)
			}
			else if(value == 3){
				filterusers = this.props.users.filter(
					(user) => {
						return (user.value >= 1000 && user.value < 5000);
					}
				)
			}
			else if(value == 4){
				filterusers = this.props.users.filter(
					(user) => {
						return (user.value >= 5000);
					}
				)
			}
		}
		this.props.filtered(filterusers);
	}
	getContent(){
		if(this.props.link == "byvalue"){
			return(
				<select onChange={this.changeValue.bind(this)}>
					<option>Select a Value ($)</option>
					<option value="1">$0-$999</option>
					<option value="2">$1000-$4999</option>
					<option value="3">$5000-$9999</option>
					<option value="4">$10000-above</option>
				</select>
			);
		}
		else if(this.props.link == "byzip"){
			return(
				<div>
					<span>Enter a valid Zipcode:</span> <input type="text" onChange={this.changeValue.bind(this)}/>
				</div>
			);
		}
		else if(this.props.link == "byinfluence"){
			return(
				<select onChange={this.changeValue.bind(this)}>
					<option value="1">0 - 499</option>
					<option value="2">500 - 1k</option>
					<option value="3">1k - 5k</option>
					<option value="4">5k Above</option>
				</select>
			)
		}
	}
	render(){
		return(
			<div>
				{this.getContent()}
			</div>
		)
	}
}