import { StyleSheet } from "react-native"
import { Colors } from "../../../theme/index"

export default StyleSheet.create({
	inputWrapper: {
		alignSelf: "stretch"
	},
	input: {
		backgroundColor  : Colors.secondary,
		borderWidth      : 1,
		borderColor      : "transparent",
		color            : Colors.frost,
		height           : 30,
		borderRadius     : 15,
		paddingHorizontal: 10,
		paddingVertical  : 0
	}
})
