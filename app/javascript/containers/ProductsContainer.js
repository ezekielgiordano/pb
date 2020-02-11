import React, { Component } from 'react'

class ProductsContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	// Remove "empty-page-placeholder" class when page is not empty
	render() {
		return (
			<div className="page-container empty-page-placeholder">
				(Products Page)
			</div>
		)
	}
}

export default ProductsContainer