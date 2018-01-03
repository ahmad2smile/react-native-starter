import { combineReducers } from "redux"

import clicker from "./clicker/clickerReducer"
import facebookexample from "./facebookexample/facebookexampleReducer"
import nav from "./nav/navReducer"
import login from "./login/loginReducer"

export default combineReducers({
	clicker,
	facebookexample,
	nav,
	login
})
