import React, { Component } from 'react'
import { Image } from 'playbook-ui'
import UserDropdown from '../components/UserDropdown'
import pbj from '../../assets/images/pbj.png'
import bell from '../../assets/images/bell.png'
import box from '../../assets/images/box.png'
import arrowDown from '../../assets/images/arrowDown.png'

class NavigationBarA extends Component {
	constructor(props) {
		super(props)
		this.state = {
			bellCount: 0,
			boxCount: 0,
			user: {},
			onlineStatus: 'offline'
		}
		this.updateUser = this.updateUser.bind(this)
		this.updateOnlineStatus = this.updateOnlineStatus.bind(this)
	}

	updateUser() {

	}

	updateOnlineStatus() {

	}

	render() {
		let user = this.state.user
		let userNameFirstLast
		let avatarUrl
		if (Object.keys(user).length === 0 && user.constructor === Object) {
			userNameFirstLast = 'Indira Shree'
			avatarUrl = 'https://randomuser.me/api/portraits/women/44.jpg'
		} else {
			userNameFirstLast = user.first_name + ' ' + user.last_name
		}

		return (
			<div className="navigation-bar-a">
				<div className="navigation-bar-a-middle">
					<div className="navigation-bar-a-interior">
						<div className="pbj-image-box">
							<Image url={pbj} />
						</div>
						<div className="top-right-icons">
							<span className="bell-notifier">
								<img src={bell} />
								<span className="bell-counter">
									{this.state.bellCount}
								</span>
							</span>
							<span className="box-notifier">
								<img src={box} />
								<span className="box-counter">
									{this.state.boxCount}
								</span>
							</span>
							<UserDropdown
								userNameFirstLast={userNameFirstLast}
								avatarUrl={avatarUrl}
							/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default NavigationBarA