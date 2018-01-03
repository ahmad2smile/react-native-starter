import React, { Component } from "react"
import { Text, View } from "react-native"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { NavigationActions } from "react-navigation"

import RoundButton from "../../components/RoundButton/RoundButton"

import { loginReset } from "../../appstate/actions/login/loginActions"

import { Colors } from "../../theme/"

import styles from "./Styles/DashboardComponentStyles"

@connect(state => ({ nav: state.nav, login: state.login }))
class DashboardComponent extends Component {
	constructor (props) {
		super(props)

		// re-Route to Login if user  un-Authorized
		if (!this.isUserAuthorized(this.props.login.loginRequest)) {
			// this.logOutHandler()
		}

		this.logOutHandler = this.logOutHandler.bind(this)
	}
	static navigationOptions = {
		title               : "Dashboard",
		headerStyle         : { backgroundColor: Colors.primary },
		headerBackTitleStyle: { color: "#fff", fontSize: 12 },
		headerTintColor     : "#fff",
		headerTitleStyle    : { color: "#FFF", fontSize: 14 }
	}

	isUserAuthorized (loginRequestStatus) {
		return loginRequestStatus === "success"
	}

	logOutHandler () {
		this.props.dispatch(loginReset())

		const resetAction = NavigationActions.reset({
			index  : 0,
			actions: [NavigationActions.navigate({ routeName: "Login" })]
		})
		this.props.navigation.dispatch(resetAction)
	}

	render () {
		const { login: { loginRequest, loginResponse: { user } } } = this.props
		return (
			<View style={styles.container}>
				<View style={styles.content}>
					<Text>Dasboard Here</Text>
					<Text>Hello {user.lastname}</Text>
					<Text>Login Request Status: {loginRequest}</Text>
					<RoundButton color="red" innerContent="Logout" onPress={this.logOutHandler} />
				</View>
			</View>
		)
	}
}

DashboardComponent.propTypes = {
	email: PropTypes.string
}

export default DashboardComponent
