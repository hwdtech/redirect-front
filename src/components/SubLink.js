import React, { PropTypes } from 'react'
import { Button } from 'react-bootstrap'
import { deleteSubLink, editSubLink, changeInputMode} from '../actions'

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
      () => { dispatch(changeInputMode()) }
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