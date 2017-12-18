import { INC_CLICKER } from "../../actionTypes/"

export default function clickerReducer (state = { count: 0 }, action) {
	switch (action.type) {
	case INC_CLICKER:
		return { ...state, count: state.count + action.payload }
	default:
		return state
	}
}
