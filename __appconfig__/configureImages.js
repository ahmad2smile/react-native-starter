export default function configureImages (_appName) {
	let logo = require("../assets/images/logo.png")

	if (_appName) {
		const appName = _appName.toLowerCase()
		switch (appName) {
		case "epicor":
			logo = require("../assets/images/logo(epicor).png")
			break

		default:
			break
		}
	}

	return {
		logo
	}
}
