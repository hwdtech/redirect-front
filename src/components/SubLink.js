import React, { PropTypes } from 'react'
import { Button } from 'react-bootstrap'
import { deleteSubLink, changeInputMode, viewContent} from '../actions'
import * as CONSTANTS from './CONSTANTS'
// const isSelected = () => {
// 	return
// }

const SubLink = ({ id, title, rules, selectedMainLink, dispatch}) => (
  <li>
  	<h4> {title} </h4>
     <p> Rules: {rules}</p>
     <Button onClick={
     	() => { dispatch(deleteSubLink(id)) }
     }> Delete</Button>
     <Button onClick={
      () => { 
        dispatch(changeInputMode())
        dispatch(viewContent(CONSTANTS.VIEW_SUB_LINK_FORM))
      }
     }> Edit</Button>
  </li>
)

SubLink.propTypes = {
  	id: PropTypes.number.isRequired,
  	title: PropTypes.string.isRequired,
    rules: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
}

export default SubLink