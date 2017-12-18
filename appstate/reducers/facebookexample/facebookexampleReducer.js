import * as types from "../../actionTypes/"

const initialState = {
	fbApiData: {
		description: "",
		movies     : [{ title: "", releaseYear: "" }],
		title      : ""
	},
	notReqPayload: "",
	error        : ""
}

export default function facebookexampleReducer (state = initialState, action) {
	switch (action.type) {
	case types.FACEBOOK_EXAMPLE_API_REQUEST:
		return { ...state, notReqPayload: action.payload }
	case types.FACEBOOK_EXAMPLE_API_SUCCESS:
		return { ...state, fbApiData: action.payload }
	case types.FACEBOOK_EXAMPLE_API_ERROR:
		return { ...state, error: action.payload }
	default:
		return state
	}
}
