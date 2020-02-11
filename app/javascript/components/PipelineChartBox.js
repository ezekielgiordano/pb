import React, { Component } from 'react'

class PipelineChartBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			addToCartCount: 0,
			shoppingCartCount: 0,
			paymentMethodsCount: 0,
			deliveryMethodsCount: 0,
			confirmCount: 0,
			deliveryCount: 0
		}
	}

	componentDidMount() {
		// Fetch request to get counts
	}

	render() {
		return (
			<div>
				<div className="pipeline-chart-box">
					<div className="pipeline-chart-title-box">
						Pipeline Chart
					</div>
					<div className="pipeline-chart-row">
						Add to Cart
						<div className="percentage-bar">

						</div>
						<div className="pipeline-chart-counter">
							{this.state.addToCartCount}
						</div>
					</div>
					<div className="pipeline-chart-row">
						Shopping Cart
						<div className="percentage-bar">

						</div>
						<div className="pipeline-chart-counter">
							{this.state.shoppingCartCount}
						</div>
					</div>
					<div className="pipeline-chart-row">
						Payment Methods
						<div className="percentage-bar">

						</div>
						<div className="pipeline-chart-counter">
							{this.state.deliveryMethodsCount}
						</div>
					</div>
					<div className="pipeline-chart-row">
						Delivery Methods
						<div className="percentage-bar">

						</div>
						<div className="pipeline-chart-counter">
							{this.state.deliveryMethodsCount}
						</div>
					</div>
					<div className="pipeline-chart-row">
						Confirm
						<div className="percentage-bar">

						</div>
						<div className="pipeline-chart-counter">
							{this.state.confirmCount}
						</div>
					</div>
					<div className="pipeline-chart-row">
						Delivery
						<div className="percentage-bar">

						</div>
						<div className="pipeline-chart-counter">
							{this.state.deliveryCount}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default PipelineChartBox