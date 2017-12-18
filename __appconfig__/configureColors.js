export default function configureColors (_appName) {
	let primary = "#34495e"

	if (_appName) {
		const appName = _appName.toLowerCase()

		switch (appName) {
		case "epicor":
			primary = "#3498db"
			break

		default:
			break
		}
	}

	return {
		primary
	}
}
