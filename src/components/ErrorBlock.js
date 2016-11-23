import React, { PropTypes } from 'react'
import { ERROR_BLOCK } from './CONSTANTS'
import { isVisible } from '../utils'
import { defaultStyles, hidenStyles } from '../styles'


const Error = ({value}) => (
	<li>
		{value}
	</li>
)

const ErrorBlock = ({ viewContent, errors }) => (
	<div style = {isVisible(viewContent, ERROR_BLOCK ) ? defaultStyles : hidenStyles}>
		<h3>Errors</h3>
		<ul>
			{errors.map((err, index)  =>
				<Error key={index} value={err} />
			)}
		</ul>
	</div>
)

export default ErrorBlock