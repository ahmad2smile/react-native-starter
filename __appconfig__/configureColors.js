export default function configureColors (_appName) {
	let primary = "#88b04b"
	let secondary = "#222"
	let frost = "#D8D8D8"
	let backgroundColor = ["#1e1f24", "#3b3e45", "#3b3e45"]

	if (_appName) {
		const appName = _appName.toLowerCase()

		switch (appName) {
		case "epicor":
			primary = "#28c4f2"
			secondary = "#f4995d"
			frost = "#222"
			backgroundColor = ["#fff"]
			break

		default:
			break
		}
	}

	return {
		primary,
		secondary,
		backgroundColor,
		frost
	}
}
