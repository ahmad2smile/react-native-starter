import React, { Component } from "react"
import PropTypes from "prop-types"

import { AppNavigator } from "./routes"
import { addNavigationHelpers } from "react-navigation"
import { connect } from "react-redux"

@connect(state => ({
	nav: state.nav
}))
class NavigationComponent extends Component {
	render () {
		const { dispatch, nav } = this.props

		return (
			<AppNavigator
				navigation={addNavigationHelpers({
					dispatch,
					state: nav
				})}
			/>
		)
	}
}

NavigationComponent.propTypes = {
	dispatch: PropTypes.func,
	nav     : PropTypes.object
}

export default NavigationComponent
