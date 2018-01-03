import * as types from "../../actionTypes/"

export const initialState = {
	loginRequest : "requesting",
	loginResponse: {
		user : {},
		token: ""
	},
	loginError            : "",
	forgotPasswordRequest : "requesting",
	forgotPasswordResponse: {
		message: ""
	},
	forgotPasswordError: ""
}

export default function apiReducer (state = initialState, action) {
	switch (action.type) {
	case types.LOGIN_API_REQUEST:
		return { ...state, loginRequest: "requested" }
	case types.LOGIN_API_SUCCESS:
		return {
			...state,
			loginRequest : "success",
			loginResponse: action.payload
		}
	case types.LOGIN_API_ERROR:
		return {
			...state,
			loginRequest: "error",
			loginError  : action.payload
		}
	case types.LOGIN_API_FORGOTPASSWORD_REQUEST:
		return { ...state, forgotPasswordRequest: "requested" }
	case types.LOGIN_API_FORGOTPASSWORD_SUCCESS:
		return {
			...state,
			forgotPasswordRequest : "success",
			forgotPasswordResponse: action.payload
		}
	case types.LOGIN_API_FORGOTPASSWORD_ERROR:
		return {
			...state,
			forgotPasswordRequest: "error",
			forgotPasswordError  : action.payload
		}
	case types.LOGIN_API_RESET:
		return { ...state, ...initialState }
	default:
		return state
	}
}
