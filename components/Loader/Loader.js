import React from "react"
import { ActivityIndicator, View } from "react-native"
import PropTypes from "prop-types"

import styles from "./Styles/LoaderStyles"

import { Colors } from "../../theme/"

const Loader = ({ color }) => {
	return (
		<View style={styles.container}>
			<ActivityIndicator color={color} size="small" />
		</View>
	)
}

Loader.defaultProps = {
	color: Colors.primary
}

Loader.propTypes = {
	color: PropTypes.string
}

export default Loader
