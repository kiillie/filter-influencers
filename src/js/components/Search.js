import React from 'react';
import $ from 'jquery';

export default class Search extends React.Component{
	constructor(){
		super();
		this.state = {
			influencers_url: 'http://localhost:8081/influencers',
			influencers: {}
		}
	}
	componentDidMount(){
		this.serverRequest = $.get(this.state.influencers_url, function(result){
			console.log(result);
			this.setState({
				influencers: result
			});
		}.bind(this));
	}
	render(){
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
		                <select class="form-control">
		                  <option>Value</option>
		                  <option>$1000</option>
		                  <option>$10, 000</option>
		                  <option>$100, 000</option>
		                </select>
		              </div>
		            </div>
		          </form>
		          <div class="influenced-wrap">
		            <div class="row">
		              <div class="col-xs-6 col-sm-3">
		                <div class="influenced">
		                  <div class="i-image">
		                    <img src="images/github.png" alt="" />
		                  </div>
		                  <span class="i-name">Github</span>
		                  <div class="i-details">
		                    <span>@github</span>
		                    <span><i class="fa fa-map"></i> San Fransisco</span>
		                  </div>
		                  <div class="i-value">
		                    <span class="value"><i class="indicator-value high"></i> $25,000</span>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </div>
	          </div>
          </div>
		)
	}
}