import { StyleSheet } from "react-native"
import { ApplicationStyles, Colors } from "../../../theme/"

export default StyleSheet.create({
	...ApplicationStyles.screen,
	container: {
		...ApplicationStyles.screen.container,
		flex             : 1,
		justifyContent   : "center",
		alignItems       : "center",
		backgroundColor  : Colors.background[0],
		paddingHorizontal: 20
	},
	content: {
		flex      : 1 / 2,
		alignSelf : "stretch",
		alignItems: "center"
	},
	logoWrapper: {
		paddingBottom: 20
	},
	form: {
		flex     : 1,
		alignSelf: "stretch"
	},
	username: {
		paddingBottom: 10
	},
	buttons: {
		flex          : 1,
		flexDirection : "row",
		justifyContent: "center"
	}
})
