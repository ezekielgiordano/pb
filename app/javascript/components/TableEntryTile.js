import React from 'react'
import { Avatar } from 'playbook-ui'

const TableEntryTile = props => {
	return (
		<div className="table-entry-tile">
			<span className="table-avatar">
				<Avatar
					name={props.entry.name}
					size='xs'
					url={props.entry.avatar_url}
				/>
			</span>
		</div>
	)
}

export default TableEntryTile