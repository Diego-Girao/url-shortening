import React, { Component } from "react"
import "./App.css"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { MainContent } from "./components/MainContent"

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<MainContent />
				<Footer />
			</div>
		)
	}
}

export default App
