import { NavigationActions } from "react-navigation"
import { AppNavigator } from "../../../navigation/routes"

const initialState = AppNavigator.router.getStateForAction(
	NavigationActions.init()
	// AppNavigator.router.getActionForPathAndParams("Login") // Not needed appearently
)

export default function navReducer (state = initialState, action) {
	const nextState = AppNavigator.router.getStateForAction(action, state)

	return nextState || state
}
