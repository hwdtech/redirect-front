import React, { PropTypes } from 'react'
import { Button } from 'react-bootstrap'


const SubLink = ({ id, title, link, ruleType, rule, selectedMainLink, onDeleteClick, onEditClick}) => (
  <li>
  	<h4> {title} </h4>
    <p> Link: {link}</p>
    <p> RuleType: {ruleType}</p>
    <p> Rule: {rule}</p>
     <Button onClick={ () => onDeleteClick(id) }> Delete</Button>
     <Button onClick={ () => onEditClick(id) }> Edit</Button>
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