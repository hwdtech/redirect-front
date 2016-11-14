import React, { PropTypes } from 'react'
import VisibleSubLinkList from '../containers/VisibleSubLinkList'
import { Button } from 'react-bootstrap'


const MainLink = ({ onClick, onDeleteClick, onEditClick, id, title, defaultLink, subLinkIdList, selected}) => (
  <li
  	style={{
      color: (selected.mainLink === id) ? 'red' : 'black'
    }}>
  	<h4 onClick={onClick}> {title} </h4>
    <p> Default link: {defaultLink} </p>

    <Button onClick={() => onDeleteClick(id)}> Delete</Button>
    <Button onClick={() => onEditClick(id, selected.mainLink)}> Edit</Button>

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