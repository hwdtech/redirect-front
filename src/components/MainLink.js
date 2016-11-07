import React, { PropTypes } from 'react'

const MainLink = ({ onClick, title, defaultLink, subLinkIdList }) => (
  <li
  	onClick={onClick}
  >
    {title} -> {defaultLink}
  </li>
)

MainLink.propTypes = {
	onClick: PropTypes.func.isRequired,
  	title: PropTypes.string.isRequired,
  	defaultLink: PropTypes.string.isRequired,
  	subLinkIdList: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
}

export default MainLink