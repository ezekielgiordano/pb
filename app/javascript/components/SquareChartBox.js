import React, { Component } from 'react'

class SquareChartBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			ticketYtdCount: 0,
			overdueYtdCount: 0,
			closedWithoutActionYtdCount: 0,
			escalatedYtdCount: 0
		}
	}

	render() {
		return (
			<div className="square-chart-box">
				<div className="square-tickets-ytd square-chart-inner-box">
					<div className="tickets-ytd-icon-box square-chart-icon-box">
						i
					</div>
					<div className="square-chart-counter-and-label">
						<div className="square-chart-box-counter">
							{this.state.ticketYtdCount}
						</div>
						<div className="square-chart-inner-box-label">
							Tickets (YTD)
						</div>
					</div>
				</div>
				<div className="square-overdue-ytd square-chart-inner-box">
					<div className="overdue-ytd-icon-box square-chart-icon-box">
						i
					</div>
					<div className="square-chart-counter-and-label">
						<div className="square-chart-box-counter">
							{this.state.overdueYtdCount}
						</div>
						<div className="square-chart-inner-box-label">
							Overdue (YTD)
						</div>
					</div>
				</div>
				<div className="clearing-div"></div>
				<div className="square-closed-without-action-ytd square-chart-inner-box">
					<div className="closed-without-action-ytd-icon-box square-chart-icon-box">
						i
					</div>
					<div className="square-chart-counter-and-label">
						<div className="square-chart-box-counter">
							{this.state.closedWithoutActionYtdCount}
						</div>
						<div className="square-chart-inner-box-label">
							Closed Without Action (YTD)
						</div>
					</div>
				</div>
				<div className="square-escalated-ytd square-chart-inner-box">
					<div className="escalated-ytd-icon-box square-chart-icon-box">
						i
					</div>
					<div className="square-chart-counter-and-label">
						<div className="square-chart-box-counter">
							{this.state.escalatedYtdCount}
						</div>
						<div className="square-chart-inner-box-label">
							Escalated (YTD)
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default SquareChartBox