const path = require("path")
const fs = require("fs")
const exec = require("child_process").exec
const inquirer = require("inquirer")
const chalk = require("chalk")
const preferences = require("./appprefs.json")
const log = console.log

function askAction () {
	const questions = [
		{
			type   : "list",
			name   : "action",
			message: "Select What to Change: ",
			choices: ["Theme", "Application"],
			default: "Theme"
		}
	]

	return inquirer.prompt(questions)
}

function askAppName (appname, availableApps) {
	const questions = [
		{
			type   : "list",
			name   : "selectedAppName",
			message: "Select App Name: ",
			choices: availableApps,
			default: appname
		}
	]

	return inquirer.prompt(questions)
}

function changeAppName (newAppName) {
	const command = exec(`yarn rename ${newAppName}`)
	command.stdout.pipe(process.stdout)
	command.stderr.pipe(process.stdout)
}

function updateAppPrefs () {
	fs.writeFileSync(
		path.join(path.resolve(__dirname), "appprefs.json"),
		JSON.stringify(preferences, null, "\t")
	)
}

function cleanEnv () {
	const command = exec("yarn clean")
	command.stdout.pipe(process.stdout)
	command.stderr.pipe(process.stdout)
}

function runDepRunner (envAPPNAME) {
	const command = exec(
		`APPNAME=${envAPPNAME} yarn depRunner -- --reset-cache`
	)
	command.stdout.pipe(process.stdout)
	command.stderr.pipe(process.stdout)
}

function runDev () {
	const command = exec("yarn start")
	command.stdout.pipe(process.stdout)
	command.stderr.pipe(process.stdout)
}

function logError (stderr) {
	if (stderr) {
		log(chalk.gray.bgBlackBright("===================================="))
		log(chalk.red(stderr))
		log(chalk.gray.bgBlackBright("===================================="))
	}
}

function logSuccess (stdout) {
	log(chalk.gray.bgBlackBright("===================================="))
	log(chalk.green(stdout))
	log(chalk.gray.bgBlackBright("===================================="))
}

async function runMainSetup () {
	const { action } = await askAction()

	const { selectedAppName } = await askAppName(
		preferences.appname,
		preferences.availableApps
	)

	if (action === "Theme") {
		runDepRunner(selectedAppName)

		return
	}

	if (preferences.appname === selectedAppName) {
		logError("App Name was not changed")
		logSuccess("All Done! Running depRunner now!! ")

		// run depRunner with new APPNAME env variable
		runDepRunner(selectedAppName.toLowerCase())

		runDev()
	} else {
		// update config file
		preferences.appname = selectedAppName
		updateAppPrefs()

		// change app name with react-native-rename
		changeAppName(selectedAppName)

		// clean cache
		cleanEnv()

		logSuccess("All Done! Running depRunner now!! ")

		// run depRunner with new APPNAME env variable
		runDepRunner(selectedAppName.toLowerCase())

		runDev()
	}
}

// ONE FUNC TO RULE 'EM ALL
runMainSetup()
