import React, { Component } from 'react'

class SettingsContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	// Remove "empty-page-placeholder" class when page is not empty
	render() {
		return (
			<div className="page-container empty-page-placeholder">
				(Settings Page)
			</div>
		)
	}
}

export default SettingsContainer