import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>URL Shortening</h2>
				</div>
				{/* <p className="App-intro">
					To get started, edit <mark>src/App.js</mark> and save to reload.
				</p> */}
			</div>
		)
	}
}

export default App
