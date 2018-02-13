"use strict"
// いじる前にだれかいじってないかスプレッドシートを確認してください。
//コンフリクトしないように更新してから編集するようにしましょう。

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
		<div >

			<Tweet/>

			<NewPoster/>

		</div>
		)


	}



}



