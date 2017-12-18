import { all } from "redux-saga/effects"

import { helloSagaWatcher } from "./helloSaga/helloSaga"

export default function * rootSaga () {
	yield all([helloSagaWatcher()])
}
