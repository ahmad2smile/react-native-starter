import { AppNavigator } from "../../../navigation/routes"

const initialState = AppNavigator.router.getStateForAction(
	AppNavigator.router.getActionForPathAndParams("Login")
)

export default function navReducer (state = initialState, action) {
	const nextState = AppNavigator.router.getStateForAction(action, state)

	return nextState || state
}
