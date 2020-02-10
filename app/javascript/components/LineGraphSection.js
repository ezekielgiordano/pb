import React, { Component } from 'react'
import { LineGraph } from 'playbook-ui'

class LineGraphSection extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	render() {
		return (
			<div className="line-graph-box">
				<LineGraph
					id='line-graph'
					className="line-graph"
					title='Key Performance Indicators'
				/>
			</div>
		)
	}
}

export default LineGraphSection