import React, { Component } from "react"
import { Provider } from "react-redux"

import store from "./appstate/store/"

import NavigationComponent from "./navigation/NavigationComponent"

export default class App extends Component {
	render () {
		return (
			<Provider store={store}>
				<NavigationComponent />
			</Provider>
		)
	}
}
