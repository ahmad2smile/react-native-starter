import React from "react"
import { TouchableOpacity, Text } from "react-native"
import PropTypes from "prop-types"

import styles from "./Styles/RoundButtonStyles"

const RoundButton = ({ innerContent, onPress, color = "#fff" }) => {
	return (
		<TouchableOpacity
			style={[styles.button, { backgroundColor: color }]}
			onPress={onPress}
		>
			<Text style={styles.buttonText}>{innerContent}</Text>
		</TouchableOpacity>
	)
}

RoundButton.propTypes = {
	innerContent: PropTypes.node.isRequired,
	onPress     : PropTypes.func.isRequired,
	color       : PropTypes.string
}

export default RoundButton
