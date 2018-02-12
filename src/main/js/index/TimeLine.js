"use strict"

import React, { Component } from 'react';
import Tweet from "../Component/Tweet";

export default class TimeLine extends Component{


	constructor(props){
		super(props);
	}


	render(){
		return(
		<div>
			TimeLine.js
			<Tweet/>

		</div>
		);


	}



}



