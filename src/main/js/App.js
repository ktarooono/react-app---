



import React, { Component } from 'react';
import {render} from "react-dom";


class App extends Component {


render(){
	return (
			<div>
				大野 啓太郎
			</div>
			);


}

};

console.log("app.js　読み込み成功しました！yattane")

render(<App/>,document.getElementById("react"));


export default App;




