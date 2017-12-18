import configureImages from "./configureImages"
import configureColors from "./configureColors"

// const fs = require("fs")
// const appConfig = require("./app.json")

const APPNAME = process.env.APPNAME

// appConfig.name = APPNAME || appConfig.name
// appConfig.displayName = APPNAME || appConfig.displayName

// fs.writeFileSync("app.json", JSON.stringify(appConfig))

export default {
	images: configureImages(APPNAME),
	colors: configureColors(APPNAME)
}
