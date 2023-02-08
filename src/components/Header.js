import React from "react"
import logo from "../logo.svg"

export function Header() {
	return (
		<div className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h2>URL Shortening</h2>
		</div>
	)
}
