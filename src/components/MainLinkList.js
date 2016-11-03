import React, { PropTypes } from 'react'
import MainLink from './MainLink'

const MainLinkList = ({ mainLinks }) => (
  <ul>
    {mainLinks.map(mainLink =>
      <MainLink
        key={mainLink.id}
        {...mainLink}
      />
    )}
  </ul>
)

MainLinkList.propTypes = {
  mainLinks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    defaultLink: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default MainLinkList