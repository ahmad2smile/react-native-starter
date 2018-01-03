import React, { Component } from "react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/es/integration/react"

import "./__debug__/ReactotronConfig" // Run Reactron Tools config

import { store, persistor } from "./appstate/store/"

import NavigationComponent from "./navigation/NavigationComponent"
import Loader from "./components/Loader/Loader"

const onBeforeLift = () => {
	// Anything that needs to be done before App ready (by redux-persist)
}

export default class App extends Component {
	render () {
		return (
			<Provider store={store}>
				<PersistGate loading={<Loader />} onBeforeLift={onBeforeLift} persistor={persistor}>
					<NavigationComponent />
				</PersistGate>
			</Provider>
		)
	}
}
