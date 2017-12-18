import { INC_CLICKER } from "../../actionTypes/"

export function incrementClicker (incrementBy) {
	return {
		type   : INC_CLICKER,
		payload: incrementBy
	}
}
