"use strict"

import React, { Component } from 'react';
import {Paper,TextField,RaisedButton} from "material-ui";


export default class UserRegister extends Component{


	constructor(props) {
	    super(props);
	    this.state ={
	    		userId:"",
	    		password:""
	    		};
	    this.handlePasswordChange= this.handlePasswordChange.bind(this);
	    this.handleUserIdChange= this.handleUserIdChange.bind(this);

	}

	handleUserIdChange(event,value){
		this.setState((prev)=>({
			userId:value
		}));

	}
	handlePasswordChange(event,value){
		this.setState((prev)=>({
			password:value
		}));
	}
	handleLoginButtonClick(){

	}

	render(){
		return(
		<div style={{width:"80%",margin:"0 auto"}}>
			<Paper style={{margin:"20px",padding:"20px"}}>
			<h2> ログイン画面 </h2>
			<h2/>
			<TextField hintText="ユーザID" onChange={this.handleUserIdChange} value={this.state.userId}/><p/>
			<TextField hintText="パスワード" onChange={this.handlePasswordChange}value={this.state.password}/><p/>
			<RaisedButton label="Login"onClick={this.handleLoginButtonClick} />
			</Paper>
		</div>
		)


	}
}