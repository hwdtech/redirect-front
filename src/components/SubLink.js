import React, { PropTypes } from 'react'
import { Button } from 'react-bootstrap'
import { deleteSubLink, changeInputMode, setVisibleContent, selectSubLink} from '../actions'
import * as CONSTANTS from './CONSTANTS'
// const isSelected = () => {
// 	return
// }

const SubLink = ({ id, title, link, ruleType, rule, selectedMainLink, dispatch}) => (
  <li>
  	<h4> {title} </h4>
    <p> Link: {link}</p>
    <p> RuleType: {ruleType}</p>
    <p> Rule: {rule}</p>
     <Button onClick={
     	() => { dispatch(deleteSubLink(id)) }
     }> Delete</Button>
     <Button onClick={
      () => { 
        dispatch(changeInputMode())
        dispatch(setVisibleContent([CONSTANTS.SUB_LINK_FORM]))
        dispatch(selectSubLink(id))
      }
     }> Edit</Button>
  </li>
)

SubLink.propTypes = {
  	id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    ruleType: PropTypes.string.isRequired,
    rule: PropTypes.string.isRequired
}

export default SubLink