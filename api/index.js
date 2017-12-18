import axios from "axios"

export function getFacebookExample () {
	return axios.get("https://facebook.github.io/react-native/movies.json")
}
