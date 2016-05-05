import React from 'react';
import $ from 'jquery';
import Cookie from 'react-cookie';

export default class Search extends React.Component{
	constructor(){
		super();
		this.state = {
			influencers_url: 'http://localhost:8081/influencers',
			influencers: []
		}
	}
	componentDidMount(){
		var marketer = this.props.params.id;
		console.log(this.state.influencers_url + "/" + marketer);
		this.serverRequest = $.get(this.state.influencers_url + "/" + marketer, function(result){
			this.setState({
				influencers: result.influencers
			});
		}.bind(this));
	}
	render(){
		//console.log(this.state.influencers);
		return(
		<div class="wrap">
			<div class="container">
				  <form action="">
		            <div class="form-group">
		              <input type="text" class="form-control search-box" placeholder="Search for influencers" />
		            </div>
		            <div class="row">
		              <div class="col-xs-12 col-md-3">
		                <select class="form-control">
		                  <option>Location</option>
		                  <option>USA</option>
		                  <option>Philippines</option>
		                  <option>Russia</option>
		                  <option>Japan</option>
		                </select>
		              </div>
		              <div class="col-xs-12 col-md-3">
		                <select class="form-control">
		                  <option>Gender</option>
		                  <option>Male</option>
		                  <option>Female</option>
		                </select>
		              </div>
		              <div class="col-xs-12 col-md-3">
		                <select class="form-control" onChange={this.filterChange.bind(this)}>
		                  <option>Value</option>
		                  <option value="1000">$1000</option>
		                  <option value="10000">$10, 000</option>
		                  <option value="100000">$100, 000</option>
		                </select>
		              </div>
		            </div>
		          </form>
		          <div class="influenced-wrap">
		            <div class="row">
		              {this.state.influencers.map(function(influencer){
		              	return(
		              		<div class="col-xs-6 col-sm-3">
				                <div class="influenced">
				                  <div class="i-image">
				                    <img src={influencer.img_url} alt="" />
				                  </div>
				                  <span class="i-name">{influencer.first_name} {influencer.last_name}</span>
				                  <div class="i-details">
				                    <span>@{influencer.username}</span><br/>
				                    <span><i class="fa fa-map"></i> No. of Influenced: {influencer.no_of_influence}</span>
				                  </div>
				                  <div class="i-value">
				                    <span class="value"><i class="indicator-value high"></i> ${influencer.value}</span>
				                  </div>
				                </div>
				              </div>
		              	)
		              })}
		            </div>
		          </div>
	          </div>
          </div>
		)
	}
}