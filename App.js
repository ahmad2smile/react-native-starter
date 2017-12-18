import React, { Component } from "react"
import { Provider } from "react-redux"

import store from "./appstate/store/"

import LoginComponent from "./screens/Login/LoginComponent"

export default class App extends Component {
	render () {
		return (
			<Provider store={store}>
				<LoginComponent />
			</Provider>
		)
	}
}
