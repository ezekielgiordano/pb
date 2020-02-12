import React, { Component } from 'react'
import { Avatar } from 'playbook-ui'
import { User } from 'playbook-ui'
import arrowDown from '../../assets/images/arrowDown.png'

class UserDropdown extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
		this.showMenu = this.showMenu.bind(this)
		this.hideMenu = this.hideMenu.bind(this)
	}

	showMenu() {
		let userDropdownBottom = document.getElementsByClassName('user-dropdown-bottom')[0]
		userDropdownBottom.style.display = 'block'
	}

	hideMenu() {
		let userDropdownBottom = document.getElementsByClassName('user-dropdown-bottom')[0]
		userDropdownBottom.style.display = 'none'
	}

	render() {
		return (
			<div
				onMouseOver={this.showMenu}
				onMouseOut={this.hideMenu}
				className="user-dropdown">
				<div className="user-dropdown-top">
					<span className="arrow-nav">
						<img src={arrowDown} />
					</span>
					<span className="avatar-nav">
						<Avatar
							name={this.props.userNameFirstLast}
							size='xs'
						/>
					</span>
					<span className="user-nav">
						<User
					      name={this.props.userNameFirstLast}
					      orientation="horizontal"
					      align="left"
					      avatar_url={this.props.avatarUrl}
						/>
					</span>
				</div>
				<div className="user-dropdown-bottom">
					<div className="user-dropdown-tile">
						Profile
					</div>
					<div className="user-dropdown-tile">
						Settings
					</div>
					<div className="user-dropdown-tile">
						Account
					</div>
					<div className="user-dropdown-tile">
						Etc.
					</div>
				</div>
			</div>
		)
	}
}

export default UserDropdown