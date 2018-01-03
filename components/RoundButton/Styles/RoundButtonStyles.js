import { StyleSheet } from "react-native"
import { Fonts } from "../../../theme/"

export default StyleSheet.create({
	button: {
		height           : 30,
		paddingHorizontal: 10,
		borderRadius     : 15,
		justifyContent   : "center"
	},
	buttonText: {
		textAlign: "center",
		color    : "#fff",
		fontSize : Fonts.size.small
	}
})
