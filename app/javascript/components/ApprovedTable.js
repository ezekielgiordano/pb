import React, { Component } from 'react'
import TableEntryTile from './TableEntryTile'

class ApprovedTable extends Component {
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
				name: 'Brian Rogers',
				avatar_url: 'https://randomuser.me/api/portraits/men/44.jpg',
				entry_type: 'Missing part'
			},
			{
				id: 1,
				name: 'Rachael Evans',
				avatar_url: 'https://randomuser.me/api/portraits/women/44.jpg',
				entry_type: 'Not perform...'
			},
			{
				id: 2,
				name: 'Bart Stevens',
				avatar_url: 'https://randomuser.me/api/portraits/men/44.jpg',
				entry_type: 'Missing part...'
			},
			{
				id: 3,
				name: 'Jerry Thomas',
				avatar_url: 'https://randomuser.me/api/portraits/men/44.jpg',
				entry_type: 'Unexpected...'
			},
			{
				id: 4,
				name: 'Rita Cerone',
				avatar_url: 'https://randomuser.me/api/portraits/women/44.jpg',
				entry_type: 'Need Techn...'
			},
			{
				id: 5,
				name: 'Mary Smith',
				avatar_url: 'https://randomuser.me/api/portraits/women/44.jpg',
				entry_type: 'Not perform...'
			},
			{
				id: 6,
				name: 'Caroline Nguyen',
				avatar_url: 'https://randomuser.me/api/portraits/women/44.jpg',
				entry_type: 'Not perform...'
			},
			{
				id: 7,
				name: 'Nolan Broward',
				avatar_url: 'https://randomuser.me/api/portraits/men/44.jpg',
				entry_type: 'Missing part...'
			},
			{
				id: 8,
				name: 'Jill Reeves',
				avatar_url: 'https://randomuser.me/api/portraits/women/44.jpg',
				entry_type: 'Missing part...'
			},
			{
				id: 9,
				name: 'Janet Newman',
				avatar_url: 'https://randomuser.me/api/portraits/women/44.jpg',
				entry_type: 'Not perform...'
			},
			{
				id: 10,
				name: 'Chris Stewart',
				avatar_url: 'https://randomuser.me/api/portraits/men/44.jpg',
				entry_type: 'Unexpected...'
			},
			{
				id: 11,
				name: 'Harriet Iverson',
				avatar_url: 'https://randomuser.me/api/portraits/women/44.jpg',
				entry_type: 'Not perform...'
			},
			{
				id: 12,
				name: 'Dave Keane',
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
			<div className="ticket-table approved-table">
				<div className="table-header">
					<span className="small-title">
						APPROVED
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

export default ApprovedTable