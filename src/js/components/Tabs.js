import React from 'react';
import $ from 'jquery';
import Tab from './Tab';
import Filter from './Filter';

var tabs = [{
	id : 1,
	title: 'Value',
	link: 'byvalue'
},
{
	id : 2,
	title: 'Geographic Location',
	link: 'bylocation'
},
{
	id : 3,
	title: 'Zipcode',
	link: 'byzip'
},
{
	id : 4,
	title: 'Amount of People Influenced',
	link: 'byinfluence'
}]
export default class Tabs extends React.Component{
	constructor(){
		super();
		this.state = {
			tab : "Filter Tabs",
			link: "",
			users: [],
			condition: 0,
			filtered: []
		};
	}
	componentDidMount(){
		this.serverRequest = $.get(this.props.source, function(result){
			this.setState({
				users: result
			});
		}.bind(this));
	}
	filteredUsers(filtered){
		this.setState({filtered})
	}
	changeTab(tab){
		this.setState({tab});
	}
	changeLink(link){
		this.setState({link});
	}
	render(){
		var parent = this;
		var users = this.state.filtered;
		return(
			<div>
				<h1>Category by: {this.state.tab}</h1>
				<ul>
				{tabs.map(function(tab){
					return(<Tab title={tab.title} source={parent.props.source} changeLink={parent.changeLink.bind(parent)} changeTab={parent.changeTab.bind(parent)} link={tab.link} key={tab.id}/>)
				})}
				</ul>
				<div>
					<Filter link={this.state.link} filtered={this.filteredUsers.bind(this)} users={this.state.users}/>
				</div>
				<div>
					{users.map(function(user){
						return(
							<h1 key={user._id}>{user.first_name} {user.last_name}</h1>
						)
					})}
				</div>
			</div>
		)
	}
}