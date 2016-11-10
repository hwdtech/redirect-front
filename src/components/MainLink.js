import React, { PropTypes } from 'react'
import VisibleSubLinkList from '../containers/VisibleSubLinkList'
import { Button } from 'react-bootstrap'
import { deleteMainLink, changeInputMode, showContent, deleteSubLinkListByMainId, selectMainLink } from '../actions'
import * as CONSTANTS from './CONSTANTS'


const MainLink = ({ onClick, id, title, defaultLink, subLinkIdList, selected, dispatch}) => (
  <li
  	style={{
      color: (selected.mainLink === id) ? 'red' : 'black'
    }}
  	>
  	<h4 onClick={onClick}> {title} </h4>
     <p> Default link: {defaultLink}</p>

    <Button onClick={
      () => { 
        dispatch(deleteMainLink(id)) 
        dispatch(deleteSubLinkListByMainId(id))
        dispatch(selectMainLink(false))
      }
     }> Delete</Button>
     <Button onClick={
      () => { 
        dispatch(changeInputMode())
        dispatch(showContent(CONSTANTS.VIEW_MAIN_LINK_FORM))
        if (selected.mainLink === false) {dispatch(selectMainLink(id))}
      }
     }> Edit</Button>

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