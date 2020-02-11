import React, { Component } from 'react'
import TableEntryTile from './TableEntryTile'

class NewTable extends Component {
	constructor(props) {
		super(props)
		this.state = {
			entries: []
		}
		this.handleArrowClick = this.handleArrowClick.bind(this)
	}

	componentDidMount() {
		// Fetch request to get "entries" state
	}

	handleArrowClick() {
		// Function for when arrow is clicked...
		// passed down to TableEntryTile
	}

	render() {
		let exampleForWhenThereIsNoData = [
			{
				id: 0,
				name: 'Mitch Andrews',
				avatar_url: 'https://randomuser.me/api/portraits/men/44.jpg',
				entry_type: 'Missing part'
			},
			{
				id: 1,
				name: 'Seana Greene',
				avatar_url: 'https://randomuser.me/api/portraits/women/44.jpg',
				entry_type: 'Not perform...'
			},
			{
				id: 2,
				name: 'Jon McDonough',
				avatar_url: 'https://randomuser.me/api/portraits/men/44.jpg',
				entry_type: 'Missing part'
			},
			{
				id: 3,
				name: 'Ross Davis',
				avatar_url: 'https://randomuser.me/api/portraits/men/44.jpg',
				entry_type: 'Unexpected...'
			},
			{
				id: 4,
				name: 'Christine Cho',
				avatar_url: 'https://randomuser.me/api/portraits/women/44.jpg',
				entry_type: 'Need Techn...'
			},
			{
				id: 5,
				name: 'Brittany Davidson',
				avatar_url: 'https://randomuser.me/api/portraits/women/44.jpg',
				entry_type: 'Not perform...'
			},
			{
				id: 6,
				name: 'Maria Ruiz',
				avatar_url: 'https://randomuser.me/api/portraits/women/44.jpg',
				entry_type: 'Not perform...'
			},
			{
				id: 7,
				name: 'Greg Nakamura',
				avatar_url: 'https://randomuser.me/api/portraits/men/44.jpg',
				entry_type: 'Missing part'
			},
			{
				id: 8,
				name: 'Juana Martinez',
				avatar_url: 'https://randomuser.me/api/portraits/women/44.jpg',
				entry_type: 'Missing part'
			},
			{
				id: 9,
				name: 'Amber Sellers',
				avatar_url: 'https://randomuser.me/api/portraits/women/44.jpg',
				entry_type: 'Not perform...'
			},
			{
				id: 10,
				name: 'Ryan Henderson',
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
			<div className="ticket-table new-table">
				<div className="table-header table-header-new">
					<div className="small-title table-title-a">
						NEW
					</div>
					<div className="table-entry-count">
						<span className="table-entry-count-new">
							{entryCount}
						</span>
					</div>
				</div>
				{display}
			</div>
		)
	}
}

export default NewTable