"use strict"


import React, { Component } from 'react';
import {AppBar} from 'material-ui';
import NewPoster from "../Component/NewPoster";
import Tweet from "../Component/Tweet";

export default class Home extends Component{


	constructor(props){
		super(props);
	}


	render(){
		return(
		<div style={{backgroundColor:"red"}}>
			Home.js
			<Tweet/>

			<NewPoster/>

		</div>
		)


	}



}



