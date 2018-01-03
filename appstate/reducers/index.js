import { persistCombineReducers } from "redux-persist"
import { reducer as formReducer } from "redux-form"
import { AsyncStorage } from "react-native"

import clicker from "./clicker/clickerReducer"
import facebookexample from "./facebookexample/facebookexampleReducer"
import nav from "./nav/navReducer"
import login from "./login/loginReducer"

// Setup for Redux Persist
export default persistCombineReducers(
	{
		key      : "root",
		storage  : AsyncStorage,
		blacklist: ["form", "nav"]
	},
	{
		clicker,
		facebookexample,
		nav,
		login,
		form: formReducer
	}
)
