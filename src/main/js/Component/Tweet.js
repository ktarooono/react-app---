"use strict";


import React, { Component } from 'react';
import {RaisedButton,TextField, Card, CardActions, CardHeader, CardMedia, CardTitle, CardText,FlatButton} from 'material-ui';

export default class Tweet extends Component {

	  constructor(props) {
		    super(props);
		    this.state ={
		    		user:"oono",
		    		sentence : "",
		    		title : ""
		    		};
		    this.handleCreateSNS = this.handleCreateSNS.bind(this);
		    this.handleOnSentenceChange = this.handleOnSentenceChange.bind(this);
		    this.handleSubmitButtonPush = this.handleSubmitButtonPush.bind(this);
	  }

	  handleCreateSNS(event){

		  const request = new XMLHttpRequest();
		  let api = `http://localhost:8080/api/Home/createSNSTable`;

		  request.open("GET", api);
		  request.addEventListener("load", (event) => {
			  event.responseType = "json";
		      console.log(event.target); // => 200
		      console.log(event.target.response); // => "{...}"
		  });
		  request.send()

	  };

	  handleOnSentenceChange(event,value){
		  if(event.target.id=="sentence"){
			  console.log(value);
			  this.setState((prev)=> ({
				 sentence : value
		  }));
		  }else if(event.target.id=="title"){
			  console.log(value);
			  this.setState((prev)=> ({
				 title : value
		  }));

		  }
	  }
	  handleSubmitButtonPush(event){

		  let api = `http://localhost:8080/api/Home/Post`;
		  api += "?user="+this.state.user;
		  api += "&sentence="+this.state.sentence;
		  api += "&title="+this.state.title;

		  const request = new XMLHttpRequest();
		  request.open("GET", api);
		  request.addEventListener("load", (event) => {
			  event.responseType = "json";
		      console.log(event.target); // => 200
		      console.log(event.target.response); // => "{...}"
		  });
		  request.send()


	  }


render(){
		return(
		<div>
		<Card>
	    <CardHeader
	      title="みなしん"
	      subtitle="SHIN MINAGAWA"
	      avatar="react-app---\images\_20160330_084703.JPG"
	    />
	    <CardMedia
	      overlay={<CardTitle title="みなしんの研究" subtitle="機械学習" />}
	    >
	      <img src="react-app---\images\中間層のノード数による比較.png" alt="" />
	    </CardMedia>
	    <CardTitle title="Card title" subtitle="Card subtitle" />
	    <CardText>
	    	わたしは大学時代に機械学習を用いた研究をしていました。
	    	これはその資料の一部です。
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







