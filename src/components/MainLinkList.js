import React, { PropTypes } from 'react'
import MainLink from './MainLink'
import { MAIN_LINK_LIST, } from './CONSTANTS'
import { defaultStyles, hidenStyles } from '../styles'
import { isVisible } from '../utils'


const MainLinkList = ({ mainLinks, selected, onMainLinkClick, onDeleteMainLinkButtonClick, onEditMainLinkButtonClick, viewContent}) => (
	<div style = {isVisible(viewContent, MAIN_LINK_LIST) ? defaultStyles : hidenStyles}>
		<h4>Main Links</h4>
		<ul>
			{mainLinks.map(mainLink  =>
				<MainLink
					key={mainLink.id}
					{...mainLink}
					selected={selected}
					onClick={() => onMainLinkClick(mainLink.id, selected.mainLink)}
					onDeleteClick={onDeleteMainLinkButtonClick}
					onEditClick={onEditMainLinkButtonClick}
				/>
			)}
		</ul>
	</div>
)

MainLinkList.propTypes = {
	mainLinks: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		defaultLink: PropTypes.string.isRequired,
	}).isRequired).isRequired,
	selected: PropTypes.shape({
		mainLink: PropTypes.number.isRequired,
		subLink: PropTypes.number.isRequired,
	}).isRequired,
	onMainLinkClick: PropTypes.func.isRequired,
	onDeleteMainLinkButtonClick: PropTypes.func.isRequired,
	onEditMainLinkButtonClick: PropTypes.func.isRequired, 
}

export default MainLinkList