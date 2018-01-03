import React from "react"
import { TextInput, View } from "react-native"
import PropTypes from "prop-types"

import styles from "./Styles/RoundInputStyles"

import { Colors } from "../../theme/"

const calcBorderColor = meta => {
	if (meta.touched && meta.error) {
		return Colors.danger
	}

	return meta.active ? Colors.primary : "transparent"
}

const RoundInput = ({ input, meta, refCollector, ...props }) => {
	return (
		<View style={styles.inputWrapper}>
			<TextInput
				{...input}
				{...props}
				ref={node => refCollector(node)}
				spellCheck={false}
				autoCapitalize="none"
				selectionColor={Colors.primary}
				placeholderTextColor={Colors.frost}
				underlineColorAndroid="transparent"
				style={[styles.input, { borderColor: calcBorderColor(meta) }]}
			/>
		</View>
	)
}

RoundInput.defaultProps = {
	placeholder    : "Input",
	keyboardType   : "default",
	autoFocus      : false,
	secureTextEntry: false,
	returnKeyType  : "next",
	refCollector   : () => {}, // when not collecting ref
	meta           : {} // incase redux-form is not setup
}

RoundInput.propTypes = {
	placeholder    : PropTypes.string,
	keyboardType   : PropTypes.string,
	autoFocus      : PropTypes.bool,
	secureTextEntry: PropTypes.bool,
	returnKeyType  : PropTypes.oneOf(["next", "done"]),
	refCollector   : PropTypes.func
}

export default RoundInput
