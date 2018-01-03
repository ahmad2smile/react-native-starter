import * as types from "../../actionTypes/"

export function loginRequest (credentials) {
	return {
		type   : types.LOGIN_API_REQUEST,
		payload: credentials
	}
}

export function loginSuccess (res) {
	return {
		type   : types.LOGIN_API_SUCCESS,
		payload: res
	}
}

export function loginError (err) {
	return {
		type   : types.LOGIN_API_ERROR,
		payload: err
	}
}

export function forgotPasswordRequest (email) {
	return {
		type   : types.LOGIN_API_FORGOTPASSWORD_REQUEST,
		payload: email
	}
}

export function forgotPasswordSuccess (res) {
	return {
		type   : types.LOGIN_API_FORGOTPASSWORD_SUCCESS,
		payload: res
	}
}

export function forgotPasswordError (err) {
	return {
		type   : types.LOGIN_API_FORGOTPASSWORD_ERROR,
		payload: err
	}
}

export function loginReset () {
	return {
		type: types.LOGIN_API_RESET
	}
}
