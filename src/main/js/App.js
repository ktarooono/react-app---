"use strict";


import NewPoster from "./NewPoster";
import React, { Component } from 'react';
import ReactDOM from "react-dom";


export class App extends Component {


render(){
	return (
			<div>
				App.js
				<NewPoster/>
			</div>
			);


}

};

console.log("app.js　読み込み成功しました！yattane")

ReactDOM.render(<App/>,document.getElementById("react"));



