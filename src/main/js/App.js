"use strict";


import Home from "./index/Home";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import UserRegister from "./index/UserRegister";
import {AppBar,MenuItem,Menu,RaisedButton} from "material-ui";



export class App extends Component {

	constructor(props){
		super(props);

	}




	handleMoveLogin(){
		window.open("http://localhost:8080/index/UserRegister");
	}
	handleMoveHome(){
		window.open("http://localhost:8080/index/home");
	}


render(){

	//URLのパスを取得
	let path = location.pathname;
	path = path.split("/")[2];
	console.log(path);

	//URLのパス　localhost;8080/index/\\\
	//↑\\\の部分を取得　\\\によってページを振り分ける
	let Component ;
	if(path=="home"){
		Component = <Home/>;
	}else if(path=="UserRegister"){
		Component = <UserRegister/>;
	}



	return (
			<MuiThemeProvider>
			<AppBar title="Twintter">
				<RaisedButton buttonStyle={{height:"100%"}} onClick={this.handleMoveLogin} label="Login"  primary={true}/>
				<RaisedButton buttonStyle={{height:"100%"}} onClick={this.handleMoveHome} label="Home"  primary={true}/>

			</AppBar>

			<div>
				{Component}
			</div>
			</MuiThemeProvider>
			);


}

};

console.log("app.js　読み込み成功しました！yattane")

ReactDOM.render(<App/>,document.getElementById("react"));



