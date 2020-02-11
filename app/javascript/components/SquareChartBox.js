import React, { Component } from 'react'
import greenIcon from '../../assets/images/greenIcon.png'
import redIcon from '../../assets/images/redIcon.png'
import blueIcon from '../../assets/images/blueIcon.png'
import yellowIcon from '../../assets/images/yellowIcon.png'

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
				<div className="square-tickets-ytd square-chart-inner-box top-left-box">
					<div className="tickets-ytd-icon-box square-chart-icon-box">
						<img src={greenIcon} />
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
				<div className="square-overdue-ytd square-chart-inner-box top-right-box">
					<div className="overdue-ytd-icon-box square-chart-icon-box">
						<img src={redIcon} />
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
				<div className="square-closed-without-action-ytd square-chart-inner-box bottom-left-box">
					<div className="closed-without-action-ytd-icon-box square-chart-icon-box">
						<img src={blueIcon} />
					</div>
					<div className="square-chart-counter-and-label">
						<div className="square-chart-box-counter">
							{this.state.closedWithoutActionYtdCount}
						</div>
						<div className="square-chart-inner-box-label">
							Closed Without<br />Action (YTD)
						</div>
					</div>
				</div>
				<div className="square-escalated-ytd square-chart-inner-box bottom-right-box">
					<div className="escalated-ytd-icon-box square-chart-icon-box">
						<img src={yellowIcon} />
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