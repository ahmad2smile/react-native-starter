import React from "react"
import "react-native"
import { Provider } from "react-redux"
import configureStore from "redux-mock-store"

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer"
import App from "../App"

// import { initialState as login } from "../../../appstate/reducers/login/loginReducer"

const initialState = {}

const store = configureStore()(initialState)
it("renders correctly", () => {
	const wrapper = renderer.create(<App store={store} />)
	expect(wrapper).toMatchSnapshot()
})
