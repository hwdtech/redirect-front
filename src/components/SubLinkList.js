import React, { PropTypes } from 'react'
import SubLink from './SubLink'
import * as CONSTANTS from './CONSTANTS'
import * as styles from '../styles'



const SubLinkList = ({ dispatch, subLinks, selectedMainLink, viewContent }) => (
  <div style = {(viewContent === CONSTANTS.VIEW_SUB_LINK_LIST || selectedMainLink !== false) ? styles.defaultStyles : styles.hidenStyles}>
    <h4>Sub Links</h4>
    <ul>
      {subLinks.map(subLink  =>
        <SubLink
          key={subLink.id}
          {...subLink}
          dispatch={dispatch}
          selectedMainLink={selectedMainLink}
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
  selectedMainLink: PropTypes.number.isRequired,
  viewContent: PropTypes.string.isRequired,
}

export default SubLinkList