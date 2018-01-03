import React, { Component } from "react"
import { Animated, Modal, Text, View } from "react-native"
import PropTypes from "prop-types"
import Feather from "react-native-vector-icons/Feather"

import RoundButton from "../RoundButton/RoundButton"

import styles from "./Styles/CustomAlertStyles"

import { Colors } from "../../theme/"

class CustomAlert extends Component {
	constructor (props) {
		super(props)

		this.alertAnimation = new Animated.Value(0)
	}

	componentDidMount () {
		this.animateAlert()
	}

	animateAlert () {
		Animated.spring(this.alertAnimation, {
			toValue : 1,
			friction: 6
		}).start()
	}

	calculateHeading (heading, alertType) {
		if (heading !== "Error") {
			// If Custom Heading is coming-in
			return heading
		}

		return alertType === "error" ? heading : "Alert"
	}

	render () {
		const { heading, content, visible, okHandler, alertType } = this.props

		const marginTop = this.alertAnimation.interpolate({
			inputRange : [0, 1],
			outputRange: [0, 200]
		})

		return (
			<Modal animationType="none" transparent={true} visible={visible}>
				<View style={styles.container}>
					<Animated.View style={[styles.alert, { marginTop }]}>
						<View style={styles.alertTop} />
						<View style={styles.iconBorder}>
							<View
								style={[
									styles.iconContainer,
									{
										backgroundColor:
											alertType === "error" ? Colors.danger : Colors.primary
									}
								]}
							>
								<Feather
									name={alertType === "error" ? "x" : "plus"}
									color="white"
									size={30}
								/>
							</View>
						</View>
						<View style={styles.alertBottom}>
							<Text style={styles.heading}>
								{this.calculateHeading(heading, alertType)}
							</Text>
							<Text style={styles.content}>{content}</Text>
							<View style={styles.button}>
								<RoundButton
									color={alertType === "error" ? Colors.danger : Colors.primary}
									innerContent="OK"
									onPress={okHandler}
								/>
							</View>
						</View>
					</Animated.View>
				</View>
			</Modal>
		)
	}
}

CustomAlert.defaultProps = {
	color    : Colors.primary,
	heading  : "Error",
	content  : "Something went wrong! Please try again",
	visible  : false,
	alertType: "error"
}

CustomAlert.propTypes = {
	color    : PropTypes.string,
	heading  : PropTypes.string,
	content  : PropTypes.string,
	alertType: PropTypes.oneOf(["error", "positive"]),
	visible  : PropTypes.bool.isRequired,
	okHandler: PropTypes.func.isRequired
}

export default CustomAlert
