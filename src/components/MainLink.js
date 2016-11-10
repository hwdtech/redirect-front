import React, { PropTypes } from 'react'
import VisibleSubLinkList from '../containers/VisibleSubLinkList'

const MainLink = ({ onClick, id, title, defaultLink, subLinkIdList, selected}) => (
  <li
  	style={{
      color: (selected.mainLink === id) ? 'red' : 'black'
    }}
  	>
  	<h4 onClick={onClick}> {title} </h4>
     <p> Default link: {defaultLink}</p>
     <VisibleSubLinkList mainId={id} />
  </li>
)

MainLink.propTypes = {
	  onClick: PropTypes.func.isRequired,
  	id: PropTypes.number.isRequired,
  	title: PropTypes.string.isRequired,
  	defaultLink: PropTypes.string.isRequired,
}

export default MainLink