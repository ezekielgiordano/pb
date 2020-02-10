import React, { Component } from 'react'
import TableEntryTile from './TableEntryTile'

class ManagerFeedbackTable extends Component {
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
				name: 'John Smith',
				avatar_url: 'https://randomuser.me/api/portraits/men/44.jpg',
				entry_type: 'Missing part'
			},
			{
				id: 1,
				name: 'Jane Jones',
				avatar_url: 'https://randomuser.me/api/portraits/women/44.jpg',
				entry_type: 'Not perform...'
			},
			{
				id: 2,
				name: 'Marc Rojas',
				avatar_url: 'https://randomuser.me/api/portraits/men/44.jpg',
				entry_type: 'Missing part...'
			},
			{
				id: 3,
				name: 'George Anderson',
				avatar_url: 'https://randomuser.me/api/portraits/men/44.jpg',
				entry_type: 'Unexpected...'
			},
			{
				id: 4,
				name: 'Sally Michaels',
				avatar_url: 'https://randomuser.me/api/portraits/women/44.jpg',
				entry_type: 'Need Techn...'
			},
			{
				id: 5,
				name: 'Maria Ruiz',
				avatar_url: 'https://randomuser.me/api/portraits/women/44.jpg',
				entry_type: 'Not perform...'
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
			<div className="ticket-table manager-feedback-table">
				<div className="table-header">
					<span className="small-title">
						MANAGER FEEDBACK
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

export default ManagerFeedbackTable