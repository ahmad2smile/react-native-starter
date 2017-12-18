import * as types from "../../actionTypes/"

export function facebookexampleRequest (notReqPayload) {
	return {
		type   : types.FACEBOOK_EXAMPLE_API_REQUEST,
		payload: notReqPayload
	}
}

export function facebookexampleSuccess (data) {
	return {
		type   : types.FACEBOOK_EXAMPLE_API_SUCCESS,
		payload: data
	}
}

export function facebookexampleError (err) {
	return {
		type   : types.FACEBOOK_EXAMPLE_API_ERROR,
		payload: err
	}
}
