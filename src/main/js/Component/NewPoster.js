"use strict";


import React, { Component } from 'react';
import {RaisedButton,TextField,Toolbar,ToolbarGroup} from 'material-ui';


export default class NewPoster extends Component {

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
		    this.handleNewPostButtonClick=this.handleNewPostButtonClick.bind(this);
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
		      if(event.target.response=="true"){
		    	  location.reload();
		      }
		  });
		  request.send()


	  }
	  handleNewPostButtonClick(){
		  this.setState((prev)=>({
			  nwePosterVisible:true
		  }));

	  }



render(){

	let sentenceStyle ={
			width:"100%",

	};

	return (
			<div style={{backgroundColor:"green"}}>
			<div>
				<p>NewPoster.jsですよ</p>
				<p><TextField hintText="題名" id="title" onChange={this.handleOnSentenceChange} value={this.state.title}/></p>
				<p><TextField hintText="本文" id="sentence"
					onChange={this.handleOnSentenceChange}
					value={this.state.sentence}
					style={sentenceStyle}
					multiLine={true}
					rowsMax={30}
					rows={3}
					/></p>
				<RaisedButton
				label="送信"
				onClick={this.handleSubmitButtonPush}
				/>

				<RaisedButton
				label="CREATE　SNS　Table"
					onClick={this.handleCreateSNS}
				/>
			</div>
			<Toolbar>
				<ToolbarGroup>
					<RaisedButton label="新規投稿" onClick={this.handleNewPostButtonClick}/>

				</ToolbarGroup>
			</Toolbar>
			</div>
			);

}

};

console.log("newPosterr.js　読み込み成功しました！yattane")







