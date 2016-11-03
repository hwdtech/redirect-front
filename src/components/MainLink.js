import React, { PropTypes } from 'react'

const MainLink = ({ title, defaultLink }) => (
  <li>
    {title} -> {defaultLink}
  </li>
)

MainLink.propTypes = {
  title: PropTypes.string.isRequired,
  defaultLink: PropTypes.string.isRequired
}

export default MainLink