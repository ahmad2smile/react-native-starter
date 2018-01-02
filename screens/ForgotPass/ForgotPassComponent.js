import React, { Component } from "react"
import { View, Text } from "react-native"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { facebookexampleRequest } from "../../appstate/actions/facebookexample/facebookexampleActions"

import { Colors } from "../../theme/"

import styles from "./Styles/ForgotPassComponentStyles"

@connect(state => ({ fbData: state.facebookexample.fbApiData }))
class ForgotPassComponent extends Component {
	constructor (props) {
		super(props)

		this.callFbAPI = this.callFbAPI.bind(this)
	}

	static navigationOptions = {
		title               : "FORGOT PASSWORD",
		headerStyle         : { backgroundColor: Colors.primary },
		headerBackTitleStyle: { color: "#fff", fontSize: 12 },
		headerTintColor     : "#fff",
		headerTitleStyle    : { color: "#FFF", fontSize: 14 }
	}

	callFbAPI () {
		this.props.dispatch(facebookexampleRequest("Not Req Payload"))
	}

	render () {
		return (
			<View colors={Colors.background} style={styles.container}>
				<View style={styles.content}>
					<Text>Forgot Pass Component</Text>
				</View>
			</View>
		)
	}
}

ForgotPassComponent.propTypes = {
	email: PropTypes.string
}

export default ForgotPassComponent
