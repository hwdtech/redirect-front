import React, { PropTypes } from 'react'
import { leftMenuStyles } from '../styles'
import LeftMenuButton from './LeftMenuButton'


const LeftMenuBar = ({onHomeClick, onMainLinkFormClick, onMainLinkListClick, onSubLinkFormClick}) => (
	<div className="well"  style={leftMenuStyles}>
		<LeftMenuButton onClick={onHomeClick} text="Home"/>
		<LeftMenuButton onClick={onMainLinkFormClick} text="Main Link Form"/>
		<LeftMenuButton onClick={onMainLinkListClick} text="Main Link List"/>
		<LeftMenuButton onClick={onSubLinkFormClick} text="Sub Link Form"/>
	</div>
)

export default LeftMenuBar
