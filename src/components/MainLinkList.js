import React, { PropTypes } from 'react'
import MainLink from './MainLink'
import * as CONSTANTS from './CONSTANTS'
import * as styles from '../styles'
import * as utils from '../utils'

const MainLinkList = ({ mainLinks, selected, onMainLinkClick,  viewContent, dispatch }) => (
  <div style = {utils.isVisible(viewContent, CONSTANTS.MAIN_LINK_LIST) ? styles.defaultStyles : styles.hidenStyles}>
    <h4>Main Links</h4>
    <ul>
      {mainLinks.map(mainLink  =>
        <MainLink
          key={mainLink.id}
          {...mainLink}
          selected={selected}
          dispatch={dispatch}
          onClick={() => onMainLinkClick(mainLink.id)}
        />
      )}
    </ul>
    </div>
)

MainLinkList.propTypes = {
  mainLinks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    defaultLink: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  selected: PropTypes.shape({
    mainLink: PropTypes.number.isRequired,
    subLink: PropTypes.number.isRequired,
  }).isRequired,
  onMainLinkClick: PropTypes.func.isRequired,
}

export default MainLinkList