import React, { Component } from 'react'

class PipelineChartBox extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	render() {
		return (
			<div>
				<div className="pipeline-chart-box">
					<div className="pipeline-chart-title">
						Pipeline Chart
					</div>
					<div className="pipeline-chart-row">
						Add to Cart
					</div>
					<div className="pipeline-chart-row">
						Shopping Cart
					</div>
					<div className="pipeline-chart-row">
						Payment Methods
					</div>
					<div className="pipeline-chart-row">
						Delivery Methods
					</div>
					<div className="pipeline-chart-row">
						Confirm
					</div>
					<div className="pipeline-chart-row">
						Delivery
					</div>
				</div>
			</div>
		)
	}
}

export default PipelineChartBox