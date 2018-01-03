import { StyleSheet } from "react-native"
import { Fonts } from "../../../theme/index"
import Colors from "../../../theme/Colors"

export default StyleSheet.create({
	container: {
		flex             : 1,
		justifyContent   : "flex-start",
		backgroundColor  : "rgba(0, 0, 0, 0.3)",
		paddingHorizontal: 40
	},
	alert: {
		height         : "35%",
		alignItems     : "center",
		alignSelf      : "stretch",
		justifyContent : "center",
		borderRadius   : 5,
		backgroundColor: "transparent"
	},
	alertTop: {
		flex           : 1,
		alignSelf      : "stretch",
		backgroundColor: "transparent"
	},
	alertBottom: {
		flex             : 3,
		alignSelf        : "stretch",
		alignItems       : "center",
		justifyContent   : "center",
		backgroundColor  : "#fff",
		borderRadius     : 5,
		paddingHorizontal: 10
	},
	iconBorder: {
		backgroundColor: "#fff",
		position       : "absolute",
		alignItems     : "center",
		justifyContent : "center",
		bottom         : "65%",
		zIndex         : 2,
		borderRadius   : 25,
		width          : 50,
		height         : 50
	},
	iconContainer: {
		backgroundColor: Colors.danger,
		alignItems     : "center",
		justifyContent : "center",
		borderRadius   : 23,
		// borderColor    : "white", causes a outline of bgColor -BUG
		width          : 46,
		height         : 46
	},
	heading: {
		fontSize  : Fonts.size.h3,
		paddingTop: "10%"
	},
	content: {
		paddingVertical: 10,
		textAlign      : "center"
	},
	button: {
		flex             : 1,
		alignSelf        : "stretch",
		justifyContent   : "flex-end",
		paddingHorizontal: 10,
		paddingBottom    : 10
	}
})
