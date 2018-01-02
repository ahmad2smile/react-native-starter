import { combineReducers } from "redux"

import clicker from "./clicker/clickerReducer"
import facebookexample from "./facebookexample/facebookexampleReducer"
import nav from "./nav/navReducer"

export default combineReducers({
	clicker,
	facebookexample,
	nav
})
