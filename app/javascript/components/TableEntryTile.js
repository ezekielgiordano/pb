import React from 'react'
import { Avatar } from 'playbook-ui'
import arrowRight from '../../assets/images/arrowRight.png'

const TableEntryTile = props => {
	return (
		<div className="table-entry-tile">
			<div className="table-avatar">
				<Avatar
					name={props.entry.name}
					size='xs'
					url={props.entry.avatar_url}
				/>
			</div>
			<span className="table-entry-type-and-arrow">
				<div className="arrow-right">
					<img src={arrowRight} />
				</div>
				<div className="table-entry-type">
					{props.entry.entry_type}
				</div>
			</span>
			<div className="table-spacer-div"></div>
		</div>
	)
}

export default TableEntryTile