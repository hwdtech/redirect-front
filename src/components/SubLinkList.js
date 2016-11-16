import React, { PropTypes } from 'react'
import SubLink from './SubLink'
import { SUB_LINK_LIST } from './CONSTANTS'
import { defaultStyles, hidenStyles } from '../styles'
import { isVisible } from '../utils'


const SubLinkList = ({ onDeleteSubLinkButtonClick, onEditSubLinkButtonClick, subLinks, selected, viewContent }) => (
	<div style = {(isVisible(viewContent, SUB_LINK_LIST)) ? defaultStyles : hidenStyles}>
		<h4>Sub Links</h4>
		<ul>
			{subLinks.map(subLink  =>
				<SubLink
					key={subLink.id}
					{...subLink}
					onDeleteClick={onDeleteSubLinkButtonClick}
					onEditClick={onEditSubLinkButtonClick}
					selected={selected}
				/>
			)}
		</ul>
	</div>
)

SubLinkList.propTypes = {
	subLinks: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		link: PropTypes.string.isRequired,
		ruleType: PropTypes.string.isRequired,
		rule: PropTypes.string.isRequired,
	}).isRequired).isRequired,
	selected: PropTypes.shape({
		mainLink: PropTypes.number.isRequired,
		subLink: PropTypes.number.isRequired,
	}).isRequired,
	viewContent: PropTypes.string.isRequired,
	onDeleteSubLinkButtonClick: PropTypes.func.isRequired,
	onEditSubLinkButtonClick: PropTypes.func.isRequired, 
}

export default SubLinkList