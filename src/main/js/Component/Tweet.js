"use strict";


import React, { Component } from 'react';
import {RaisedButton,TextField, Card, CardActions, CardHeader, CardMedia, CardTitle, CardText,FlatButton, FontIcon} from 'material-ui';
import {BottomNavigation, BottomNavigationItem} from 'material-ui';

const favoritesIcon = <FontIcon className="material-icons">star_half</FontIcon>;
export default class Tweet extends Component {

	  constructor(props) {
		    super(props);
		    this.state ={
		    		user:"oono",
		    		sentence : "",
		    		title : "",
		    		statement : "",
		    		image: "",


		    		};

		    //this.handle
	  }





render(){

	let api = `http://localhost:8080/api/timeline/select`;

	const request = new XMLHttpRequest();
	  request.open("GET", api);
	  request.addEventListener("load", (event) => {
		  event.responseType = "json";
	      console.log(request.responseText); // => 200
	      console.log(request.responseText.title); // => "{...}"
	  });
	  request.send()

	return(
		<div>
			<Card>
				<CardHeader
				      title = {this.state.user}
				      subtitle={this.props.subtitle}
				      avatar="\images\_20160330_084703.JPG"
				/>

				{/*}
				<CardMedia
					overlay={<CardTitle title="みなしんの研究" subtitle="機械学習" />}
				>


				    <img src="react-app---\images\中間層のノード数による比較.png" alt="" />
				</CardMedia>
				*/}


				<CardTitle title="ぼやき" subtitle="つらくない人なんていないんだなあ" />


				<CardText>
					{this.state.statement}
				</CardText>
				<CardActions>
					<FlatButton label="新規投稿" />
					<FlatButton label="いいね！" />
					</CardActions>
			</Card>
		</div>
		);




}

};

console.log("tweet.js　読み込み成功しました！yattane")







