import React, { Component } from "react"
import { View, Text, Image } from "react-native"
import { connect } from "react-redux"

import RoundButton from "../../components/RoundButton/RoundButton"

import { incrementClicker } from "../../appstate/actions/clicker/clickerActions"
import { facebookexampleRequest } from "../../appstate/actions/facebookexample/facebookexampleActions"

import { Images } from "../../theme/"

import styles from "./Styles/LoginComponentStyles"

@connect(state => ({
	clicker: state.clicker,
	fbData : state.facebookexample.fbApiData
}))
class LoginComponent extends Component {
	constructor (props) {
		super(props)

		this.btnPressHandler = this.btnPressHandler.bind(this)
		this.callFbAPI = this.callFbAPI.bind(this)
	}

	btnPressHandler () {
		this.props.dispatch(incrementClicker(1))
	}

	callFbAPI () {
		this.props.dispatch(facebookexampleRequest("notReqPayload"))
	}

	render () {
		const { title, movies, description } = this.props.fbData
		return (
			<View style={styles.container}>
				<Image source={Images.logo} />
				<Text>Pressed {this.props.clicker.count || 0} times</Text>
				<RoundButton
					color="green"
					innerContent="Hello Button"
					onPress={this.btnPressHandler}
				/>
				<Text>----------------------------------</Text>
				<Text>----------------------------------</Text>
				<Text>Call Example Facebook API</Text>
				<RoundButton
					color="#4267b2"
					innerContent="Call Fb API"
					onPress={this.callFbAPI}
				/>
				<Text>Here is the of API data</Text>
				{!!title && (
					<View>
						<Text>{"Title: " + title}</Text>
						<Text>{"Description: " + description}</Text>
						<Text>Movies List</Text>
						{movies.length &&
							movies.map((movie, i) => (
								<Text key={i}>
									{movie.title} ----- {movie.releaseYear}
								</Text>
							))}
					</View>
				)}
				<View>
					<Text>{process.env.APPNAME}</Text>
				</View>
			</View>
		)
	}
}

export default LoginComponent
