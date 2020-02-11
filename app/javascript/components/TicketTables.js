import React, { Component } from 'react'
import NewTable from './NewTable'
import ManagerFeedbackTable from './ManagerFeedbackTable'
import ProcessingTable from './ProcessingTable'
import AwaitingFeedbackTable from './AwaitingFeedbackTable'
import ApprovedTable from './ApprovedTable'

class TicketTables extends Component {
	constructor(props) {
		super(props)
		this.state = {
			newEntries: [],
			managerFeedbackEntries: [],
			processingEntries: [],
			awaitingFeedbackEntries: [],
			approvedEntries: []
		}
	}

	render() {
		return (
			<div>
				<div className="small-title ticket-tables-title">
					THIS WEEK'S TICKET ESCALATIONS
				</div>
				<div className="ticket-tables">
					<div className="ticket-wrapper-5">
						<div className="ticket-wrapper-4">
							<div className="ticket-wrapper-3">
								<div className="ticket-wrapper-2">
									<div className="ticket-wrapper-1">
										<NewTable />
										<ManagerFeedbackTable />
										<ProcessingTable />
										<AwaitingFeedbackTable />
										<ApprovedTable />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default TicketTables