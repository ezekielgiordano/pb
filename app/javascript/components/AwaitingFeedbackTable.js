import React, { Component } from 'react'
import TableEntryTile from './TableEntryTile'

class AwaitingFeedbackTable extends Component {
	constructor(props) {
		super(props)
		this.state = {
			entries: []
		}
	}

	componentDidMount() {
		// Fetch request to get "entries" state
	}

	render() {
		let exampleForWhenThereIsNoData = [

			{
				id: 0,
				name: 'Seana Greene',
				avatar_url: 'https://randomuser.me/api/portraits/women/44.jpg',
				entry_type: 'Not perform...'
			},
			{
				id: 1,
				name: 'Ross Davis',
				avatar_url: 'https://randomuser.me/api/portraits/men/44.jpg',
				entry_type: 'Unexpected...'
			}
		]
		let entries = this.state.entries
		let entryCount = entries.length
		if (entries.length === 0) {
			entries = exampleForWhenThereIsNoData
			entryCount = exampleForWhenThereIsNoData.length
		}
		let temporaryCount = 0
		let display = entries.map(entry => {
			return (
				<TableEntryTile key={entry.id} entry={entry} />
			)
		})

		return (
			<div className="ticket-table awaiting-feedback-table">
				<div className="table-header">
					<span className="small-title">
						AWAITING FEEDBACK
					</span>
					<span className="table-entry-count">
						{entryCount}
					</span>
				</div>
				{display}
			</div>
		)
	}
}

export default AwaitingFeedbackTable