import { StackNavigator } from "react-navigation"

import LoginComponent from "../screens/Login/LoginComponent"
import ForgotPassComponent from "../screens/ForgotPass/ForgotPassComponent"

export const AppNavigator = StackNavigator(
	{
		Login: {
			screen           : LoginComponent,
			navigationOptions: {
				headerBackTitle: "Back"
			}
		},
		ForgotPass: {
			screen: ForgotPassComponent
		}
	},
	{
		initialRouteName: "Login"
	}
)
