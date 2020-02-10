import React, { Component } from 'react'
import { Nav } from 'playbook-ui'
import DashboardContainer from './DashboardContainer'
import ProductsContainer from './ProductsContainer'
import InProgressContainer from './InProgressContainer'
import SettingsContainer from './SettingsContainer'

class NavigationBarB extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedPage: 'dashboard-page'
		}
		this.showDashboardContainer = this.showDashboardContainer.bind(this)
		this.showProductsContainer = this.showProductsContainer.bind(this)
		this.showInProgressContainer = this.showInProgressContainer.bind(this)
		this.showSettingsContainer = this.showSettingsContainer.bind(this)
	}

	showDashboardContainer() {
		this.setState({ selectedPage: 'dashboard-page' })
	}

	showProductsContainer() {
		this.setState({ selectedPage: 'products-page' })
	}

	showInProgressContainer() {
		this.setState({ selectedPage: 'in-progress-page' })
	}

	showSettingsContainer() {
		this.setState({ selectedPage: 'settings-page' })
	}

	render() {
		let selectedPage = this.state.selectedPage
		let display

		if (selectedPage === 'dashboard-page') {
			display = <DashboardContainer />
		}
		if (selectedPage === 'products-page') {
			display = <ProductsContainer />
		}
		if (selectedPage === 'in-progress-page') {
			display = <InProgressContainer />
		}
		if (selectedPage === 'settings-page') {
			display = <SettingsContainer />
		}		

		return (
			<div>
				<div className="navigation-bar-b">
					<span
						onClick={this.showDashboardContainer}
						className="nav-button"
					>
						Dashboard
					</span>
					<span
						onClick={this.showProductsContainer}
						className="nav-button"
					>
						Products
					</span>
					<span
						onClick={this.showInProgressContainer}
						className="nav-button"
					>
						In Progress
					</span>
					<span
						onClick={this.showSettingsContainer}
						className="nav-button"
					>
						Settings
					</span>
				</div>
				{display}
			</div>
		)
	}
}

export default NavigationBarB