import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import * as CONSTANTS from './CONSTANTS'
import * as styles from '../styles'
import { showContent, selectMainLink} from '../actions'


let LeftMenu = ({dispatch}) => (
  <div className="well" style={styles.leftMenuStyles} >
    <Button style={styles.menuItemStyles} type="submit" bsStyle="primary" 
      onClick={e => {
      e.preventDefault()
      dispatch(showContent(CONSTANTS.VIEW_HOME_CONTENT))
      dispatch(selectMainLink(false))
    }}>
       home </Button>
    <Button style={styles.menuItemStyles} type="submit" bsStyle="primary" 
      onClick={e => {
      e.preventDefault()
      dispatch(showContent(CONSTANTS.VIEW_MAIN_LINK_FORM))
    }}>
       view main link form </Button>
    <Button style={styles.menuItemStyles} type="submit" bsStyle="primary" 
      onClick={e => {
      e.preventDefault()
      dispatch(showContent(CONSTANTS.VIEW_MAIN_LINK_LIST))
    }}>
       view main link list </Button>
    <Button style={styles.menuItemStyles} type="submit" bsStyle="primary" 
      onClick={e => {
      e.preventDefault()
      dispatch(showContent(CONSTANTS.VIEW_SUB_LINK_FORM))
    }}>
       view sub link form </Button>
    </div>
)

LeftMenu = connect()(LeftMenu)

export default LeftMenu
