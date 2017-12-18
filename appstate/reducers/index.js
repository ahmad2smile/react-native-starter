import { combineReducers } from "redux"

import clicker from "./clicker/clickerReducer"
import facebookexample from "./facebookexample/facebookexampleReducer"

export default combineReducers({
	clicker,
	facebookexample
})
