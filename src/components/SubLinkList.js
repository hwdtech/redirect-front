import React, { PropTypes } from 'react'
import SubLink from './SubLink'
import * as CONSTANTS from './CONSTANTS'
import * as styles from '../styles'



const SubLinkList = ({ dispatch, subLinks, selected, viewContent }) => (
  <div style = {(viewContent === CONSTANTS.VIEW_SUB_LINK_LIST || selected.mainLink !== false) ? styles.defaultStyles : styles.hidenStyles}>
    <h4>Sub Links</h4>
    <ul>
      {subLinks.map(subLink  =>
        <SubLink
          key={subLink.id}
          {...subLink}
          dispatch={dispatch}
          selected={selected}
        />
      )}
    </ul>
  </div>
)

SubLinkList.propTypes = {
  subLinks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rules: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  selected: PropTypes.shape({
    mainLink: PropTypes.number.isRequired,
    subLink: PropTypes.number.isRequired,
  }).isRequired,
  viewContent: PropTypes.string.isRequired,
}

export default SubLinkList