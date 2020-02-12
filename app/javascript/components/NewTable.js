import React, { Component } from 'react'
import TableEntryTile from './TableEntryTile'

class NewTable extends Component {
	constructor(props) {
		super(props)
		this.state = {
			entries: [],
			bottomSectionVisible: false
		}
		this.showBottomSection = this.showBottomSection.bind(this)
		this.hideBottomSection = this.hideBottomSection.bind(this)
		this.handleArrowClick = this.handleArrowClick.bind(this)
	}

	componentDidMount() {
		// Fetch request to get "entries" state
	}

	showBottomSection() {
		this.setState({ bottomSectionVisible: true })
	}

	hideBottomSection() {
		this.setState({ bottomSectionVisible: false })
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
		
		let entries = this.state.entries.sort((b, a) => {
			return ( b.id - a.id )
		})
		let entryCount = entries.length
		if (entries.length === 0) {
			entries = exampleForWhenThereIsNoData.sort((b, a) => {
				return ( b.id - a.id )
			})
			entryCount = exampleForWhenThereIsNoData.length
		}

		let display
		let showMoreTile
		let showFewerTile
		if (entries.length <= 6) {
			display = entries.map(entry => {
				return (
					<TableEntryTile key={entry.id} entry={entry} />
				)
			})
		} else {
			if (this.state.bottomSectionVisible === false) {
				let topSix = []
				let i
				for (i = 6; i > 0; i--) {
					topSix.push(entries[i - 1])
				}
				topSix.sort((b, a) => {
					return ( b.id - a.id )
				})
				display = topSix.map(entry => {
					return (
						<TableEntryTile key={entry.id} entry={entry} />
					)
				})
				showMoreTile =
					<div
						onClick={this.showBottomSection}
						className="show-more-tile"
					>
						<span className="show-more-label">
							Show More
						</span>
					</div>
			} else {
				display = entries.map(entry => {
					return (
						<TableEntryTile key={entry.id} entry={entry} />
					)
				})
				showFewerTile =
					<div
						onClick={this.hideBottomSection}
						className="show-more-tile"
					>
						<span className="show-more-label">
							Show Fewer
						</span>
					</div>		
			}
		}

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
				{showMoreTile}
				{showFewerTile}
			</div>
		)
	}
}

export default NewTable