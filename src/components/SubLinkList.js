import React, { PropTypes } from 'react'
import SubLink from './SubLink'

const SubLinkList = ({ subLinks, selectedMainLink }) => (
  <ul>
    {subLinks.map(subLink  =>
      <SubLink
        key={subLink.id}
        {...subLink}
        selectedMainLink={selectedMainLink}
      />
    )}
  </ul>
)

SubLinkList.propTypes = {
  subLinks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rules: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  selectedMainLink: PropTypes.number.isRequired,
}

export default SubLinkList