import { StackNavigator, TabNavigator } from "react-navigation"

import LoginComponent from "../screens/Login/LoginComponent"
import ForgotPassComponent from "../screens/ForgotPass/ForgotPassComponent"
import DashboardComponent from "../screens/Dashboard/DashboardComponent"

export const DashboardNavigator = TabNavigator(
	{
		Main: {
			screen: DashboardComponent
		}
	},
	{
		animationEnabled: true,
		tabBarOptions   : {
			activeTintColor: "blue"
		}
	}
)

export const AppNavigator = StackNavigator({
	Dashboard: {
		screen: DashboardNavigator
	},
	Login: {
		screen           : LoginComponent,
		navigationOptions: {
			headerBackTitle: "Back"
		}
	},
	ForgotPass: {
		screen: ForgotPassComponent
	}
})
