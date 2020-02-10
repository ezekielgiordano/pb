import React, { Component } from 'react'
import LineGraphSection from '../components/LineGraphSection'
import TicketTables from '../components/TicketTables'
import PipelineRow from '../components/PipelineRow'

class DashboardContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	render() {
		return (
			<div className="page-container">
				<div className="dashboard-titles">
					<div className="small-title">DASHBOARD</div>
					<div className="large-title">Commerce Dashboard</div>
				</div>
				<LineGraphSection />
				<TicketTables />
				<div className="spacer-div"></div>
				<PipelineRow />
				<div className="footer-div"></div>
			</div>
		)
	}
}

export default DashboardContainer