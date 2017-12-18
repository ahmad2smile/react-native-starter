import { StyleSheet } from "react-native"
import { ApplicationStyles, Colors } from "../../../theme/"

export default StyleSheet.create({
	...ApplicationStyles.screen,
	container: {
		flex           : 1,
		justifyContent : "center",
		alignItems     : "center",
		backgroundColor: Colors.primary
	}
})
