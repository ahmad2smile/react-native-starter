import { call, takeLatest, put } from "redux-saga/effects"

import { getFacebookExample } from "../../../api/"

import * as types from "../../actionTypes/"

import {
	facebookexampleSuccess,
	facebookexampleError
} from "../../actions/facebookexample/facebookexampleActions"

function * helloSaga () {
	try {
		const response = yield call(getFacebookExample)

		yield put(facebookexampleSuccess(response.data))
	} catch (err) {
		yield put(facebookexampleError(err))
	}
}

export function * helloSagaWatcher () {
	yield takeLatest(types.FACEBOOK_EXAMPLE_API_REQUEST, helloSaga)
}
