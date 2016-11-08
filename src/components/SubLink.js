import React, { PropTypes } from 'react'

// const isSelected = () => {
// 	return
// }

const SubLink = ({ id, title, rules, selectedMainLink}) => (
  <li>
  	<h4> {title} </h4>
     <p> Rules: {rules}</p>
  </li>
)

SubLink.propTypes = {
  	id: PropTypes.number.isRequired,
  	title: PropTypes.string.isRequired,
    rules: PropTypes.string.isRequired,
}

export default SubLink