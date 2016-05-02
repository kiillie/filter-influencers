import React from 'react';
import $ from 'jquery';

export default class Search extends React.Component{
	constructor(){
		super();
		this.state = {
			twitter_url: 'http://localhost:8081/twitter',
			twitter: []
		}
	}
	changeSearch(e){
		console.log(this.state.twitter_url+ "/" + e.target.value);
		this.serverRequest = $.get(this.state.twitter_url+ "/" + e.target.value, function(result){
			this.setState({
				twitter: result
			});
		}.bind(this));
	}
	render(){
		return(
			<div class="wrap">
				<div class="container">
		        <form action="">
		          <div class="form-group">
		            <input type="text" class="form-control search-box" onChange={this.changeSearch.bind(this)} placeholder="Search for influencers" />
		          </div>
		          </form>
		          <div>
		            <ul class="nav nav-tabs" role="tablist">
		               <li role="presentation" class="active"><a href="#twitter" aria-controls="twitter" role="tab" data-toggle="tab"><i class="fa fa-twitter-square"></i> Twitter</a></li>
		              <li role="presentation"><a href="#facebook" aria-controls="home" role="tab" data-toggle="tab"><i class="fa fa-facebook-square"></i> Facebook</a></li>
		            </ul>
		            <div class="tab-content">
		              <div role="tabpanel" class="tab-pane active" id="twitter">
		                <div class="influenced-wrap">
		                  <div class="row">
		                    {this.state.twitter.map(function(user){
		                    	return(
			                      <div class="col-xs-6 col-sm-3" key={user.id}>
			                        <div class="influenced">
			                          <div class="i-image">
			                            <img src={user.profile_image_url} alt="" />
			                          </div>
			                          <span class="i-name">{user.name}</span>
			                          <div class="i-details">
			                            <span>@{user.screen_name}</span>
			                            <span><i class="fa fa-map-marker"></i> {user.location}</span>
			                          </div>
			                          <div class="i-value">
			                            <span class="value"><i class="indicator-value high"></i> Followers: {user.followers_count}</span>
			                          </div>
			                          <button class="btn btn-primary">Add</button>
			                        </div>
			                      </div>
			                      );
		                    })}
		                  </div>
		                </div>
		              </div>
		              <div role="tabpanel" class="tab-pane" id="twitter">...</div>
		              <div role="tabpanel" class="tab-pane" id="instagram">...</div>
		            </div>

		          </div>
		        </div>
		      </div>
		)
	}
}