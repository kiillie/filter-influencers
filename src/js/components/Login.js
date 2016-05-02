import React from 'react';
import $ from 'jquery';

export default class Index extends React.Component{
	constructor(){
		super();
		this.state = {
			email: "",
			password: ""
		}
	}
	changeEmail(e){
		var email = e.target.value;
		this.setState({email: email});
	}
	changePassword(e){
		var password = e.target.value;
		this.setState({password: password});
		
	}
	clickLogin(e){
		e.preventDefault();
		console.log(this.state);
		this.serverRequest = $.post("http://localhost:8081/login", this.state, function(data){
			console.log(data);
			if(data.message == "logged"){
				window.location.href = "#/search"
			}
		});
	}
	render(){
		return(
			<div class="form-wrap">
		      <div class="form-cont">
		        <ul class="nav nav-tabs" role="tablist">
		          <li role="presentation" class="active"><a href="#login" aria-controls="login" role="tab" data-toggle="tab">Login</a></li>
		          <li role="presentation"><a href="#signup" aria-controls="signup" role="tab" data-toggle="tab">Sign Up</a></li>
		        </ul>

		        <div class="tab-content">
		          <div role="tabpanel" class="tab-pane fade in active" id="login">
		            <form action="" method="POST">
		              <div class="social-login">
		                <a href="" class="btn-facebook"><i class="fa fa-facebook"></i> Login with Facebook</a>
		                <a href="" class="btn-twitter"><i class="fa fa-twitter"></i> Login with Twitter</a>
		              </div>
		              <img class="or" src="images/or.png" alt="" />
		              <div class="in-group">
		                <i class="fa fa-envelope"></i><input type="email" class="form-control" placeholder="Email" required onChange={this.changeEmail.bind(this)}/>
		              </div>
		              <div class="in-group">
		                <i class="fa fa-lock"></i><input type="password" class="form-control" placeholder="Password" required onChange={this.changePassword.bind(this)}/>
		              </div>
		              <input type="submit" class="btn btn-primary btn-send" value="Login" onClick={this.clickLogin.bind(this)}/>
		            </form>
		          </div>
		          <div role="tabpanel" class="tab-pane fade" id="signup">
		            <form action="" method="POST"></form>
		          </div>
		        </div>
		      </div>
		    </div>
		);
	}
}