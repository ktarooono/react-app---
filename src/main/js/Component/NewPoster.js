"use strict";


import React, { Component } from 'react';
import {RaisedButton} from 'material-ui';

export default class NewPoster extends Component {

	  constructor(props) {
		    super(props);
		    this.state ={user:"oono"};
		    this.handleCreateSNS = this.handleCreateSNS.bind(this);

	  }

	  handleCreateSNS(event){

		  const request = new XMLHttpRequest();
		  request.open("GET", `http://localhost:8080/api/Home/createSNSTable`);
		  request.addEventListener("load", (event) => {
		      console.log(event.target.status); // => 200
		      console.log(event.target.responseText); // => "{...}"
		  });
		  request.send()

		  return false;
	  };




render(){　
	return (
			<div style={{backgroundColor:"green"}}>
				<p>NewPoster.jsですよ</p>
				<RaisedButton label="CREATE　SNS　Table" onClick={this.handleCreateSNS}/>
			</div>
			);

}

};

console.log("newPosterr.js　読み込み成功しました！yattane")







