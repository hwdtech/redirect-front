import React, { PropTypes } from 'react'

// const isSelected = () => {
// 	return
// }

const MainLink = ({ onClick, id, title, defaultLink, subLinkIdList, selectedMainLink}) => (
  <li
  	onClick={onClick}
  	style={{
      color: (selectedMainLink === id) ? 'red' : 'black'
    }}
  	>
  	<h4> {title} </h4>
     <p> Default link: {defaultLink}</p>
     <p> List og sublink: {subLinkIdList.map(t => {return t+'|'})}</p>

  </li>
)

MainLink.propTypes = {
	onClick: PropTypes.func.isRequired,
  	id: PropTypes.number.isRequired,
  	title: PropTypes.string.isRequired,
  	defaultLink: PropTypes.string.isRequired,
  	subLinkIdList: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
}

export default MainLink