import React, { PropTypes } from 'react'
import MainLink from './MainLink'

const MainLinkList = ({ mainLinks, onMainLinkClick }) => (
  <ul>
    {mainLinks.map(mainLink =>
      <MainLink
        key={mainLink.id}
        {...mainLink}
        onClick={() => onMainLinkClick(mainLink.id)}
      />
    )}
  </ul>
)

MainLinkList.propTypes = {
  mainLinks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    defaultLink: PropTypes.string.isRequired,
    //subLinkIdList: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
  }).isRequired).isRequired,
  onMainLinkClick: PropTypes.func.isRequired
}

export default MainLinkList