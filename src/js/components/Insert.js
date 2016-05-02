import React from 'react';
import $ from 'jquery';


export default class Insert extends React.Component{
	constructor(){ 
		super();
		this.state = {
			source : "http://localhost:3000/insert"
		};
	}
	componentDidMount(){
		var rand = Math.floor((Math.random() * 200) + 1);;
		this.serverRequest = $.getJSON("http://pokeapi.co/api/v2/pokemon/" + rand + "/", function(result){
			//this.request = $.post(this.state.source, result);
			var final = JSON.stringify(result);
			
			$.ajax({
		        type: 'POST',
		        url: this.state.source,
		        processData: true,
		        contentType: 'application/json; charset=utf-8',
		        dataType: 'json',
		        data: final,
		        success: function(result) {
		            console.log(result);
		        }
		    }); 
		}.bind(this));

	}
	render(){
		return(
			<h1>Viewed!</h1>
		);
	}
}