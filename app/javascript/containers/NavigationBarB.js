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
		// Remove the part below...for demonstration when
		// empty non-dashboard pages are displayed...
		// Also remove "empty-page-placeholder" class from the
		// Products, In Progress, Settings page components
		let topRightIcons = document.getElementsByClassName('top-right-icons')[0]
		topRightIcons.classList.remove('top-right-icons-shift-left')
		// End of temporary section
	}

	showProductsContainer() {
		this.setState({ selectedPage: 'products-page' })
		// Remove the part below...for demonstration when
		// empty non-dashboard pages are displayed...
		// Also remove "empty-page-placeholder" class from the
		// Products, In Progress, Settings page components
		let topRightIcons = document.getElementsByClassName('top-right-icons')[0]
		topRightIcons.classList.add('top-right-icons-shift-left')
		// End of temporary section
	}

	showInProgressContainer() {
		this.setState({ selectedPage: 'in-progress-page' })
		// Remove the part below...for demonstration when
		// empty non-dashboard pages are displayed...
		// Also remove "empty-page-placeholder" class from the
		// Products, In Progress, Settings page components
		let topRightIcons = document.getElementsByClassName('top-right-icons')[0]
		topRightIcons.classList.add('top-right-icons-shift-left')
		// End of temporary section
	}

	showSettingsContainer() {
		this.setState({ selectedPage: 'settings-page' })
		// Remove the part below...for demonstration when
		// empty non-dashboard pages are displayed...
		// Also remove "empty-page-placeholder" class from the
		// Products, In Progress, Settings page components
		let topRightIcons = document.getElementsByClassName('top-right-icons')[0]
		topRightIcons.classList.add('top-right-icons-shift-left')
		// End of temporary section
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

		let navButtons = document.getElementsByClassName('nav-button')
		let i
		for (i = 0; i < navButtons.length; i++) {
			let buttonName = navButtons[i].getAttribute('name')
			if (buttonName === this.state.selectedPage) {
				navButtons[i].classList.add('selected-nav-button')
			} else {
				navButtons[i].classList.remove('selected-nav-button')
			}
		}		

		return (
			<div>
				<div className="navigation-bar-b">
					<div className="navigation-bar-b-middle">
						<div className="navigation-bar-b-interior">
							<span className="all-navigation-bar-b-buttons">
								<span
									onClick={this.showDashboardContainer}
									className="nav-button selected-nav-button"
									name="dashboard-page"
								>
									Dashboard
								</span>
								<span
									onClick={this.showProductsContainer}
									className="nav-button"
									name="products-page"
								>
									Products
								</span>
								<span
									onClick={this.showInProgressContainer}
									className="nav-button"
									name="in-progress-page"
								>
									In Progress
								</span>
								<span
									onClick={this.showSettingsContainer}
									className="nav-button"
									name="settings-page"
								>
									Settings
								</span>
							</span>
						</div>
					</div>	
				</div>
				<div className="blue-grey-background">
					{display}
				</div>
			</div>
		)
	}
}

export default NavigationBarB