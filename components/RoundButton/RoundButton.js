import React from "react"
import { TouchableOpacity, Text } from "react-native"
import PropTypes from "prop-types"

import styles from "./Styles/RoundButtonStyles"

import { Colors } from "../../theme/"

const RoundButton = ({
	innerContent,
	onPress,
	color = Colors.primary,
	paddingHorizontal = 10
}) => {
	return (
		<TouchableOpacity
			style={[
				styles.button,
				{
					backgroundColor: color,
					paddingHorizontal
				}
			]}
			onPress={onPress}
		>
			<Text style={styles.buttonText}>{innerContent}</Text>
		</TouchableOpacity>
	)
}

RoundButton.propTypes = {
	innerContent     : PropTypes.node.isRequired,
	onPress          : PropTypes.func.isRequired,
	color            : PropTypes.string,
	paddingHorizontal: PropTypes.number
}

export default RoundButton
