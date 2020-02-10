import React, { Component } from 'react'
import PipelineChartBox from './PipelineChartBox'
import SquareChartBox from './SquareChartBox'

class PipelineRow extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	render() {
		return (
			<div className="pipeline-row">
				<table>
					<tbody>
						<tr>
							<td>
								<PipelineChartBox />
								<SquareChartBox />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

export default PipelineRow