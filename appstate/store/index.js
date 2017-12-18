import { applyMiddleware, createStore, compose } from "redux"
import { composeWithDevTools } from "remote-redux-devtools"
import createSagaMiddleware from "redux-saga"

import rootReducer from "../reducers/"
import rootSaga from "../sagas/"

const sagaMiddleware = createSagaMiddleware()

function configureStore (initialState = {}) {
	let composer = []

	if (__DEV__) {
		composer = composeWithDevTools(applyMiddleware(sagaMiddleware))
	} else {
		composer = compose(applyMiddleware(sagaMiddleware))
	}

	return createStore(rootReducer, initialState, composer)
}

const store = configureStore()

// initiate sagas
sagaMiddleware.run(rootSaga)

export default store
