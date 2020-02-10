import React, { Component } from 'react'
import NavigationBarA from './containers/NavigationBarA'
import NavigationBarB from './containers/NavigationBarB'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	render() {
		return (
			<div>
				<NavigationBarA />
				<NavigationBarB />
			</div>
		)
	}
}

export default App