import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import * as CONSTANTS from './CONSTANTS'
import { viewContent, selectMainLink} from '../actions'

const leftMenuStyles = {
	maxWidth: 200, 
	margin: '0 0 0px',
	height: '100%', /* 100% Full-height */
  position: 'fixed', /* Stay in place */
  left: 0,
  display: 'block'
};
const menuItemStyles = {
  width: 160,
}

let LeftMenu = ({dispatch}) => (
  <div className="well" style={leftMenuStyles} >
    <Button style={menuItemStyles} type="submit" bsStyle="primary" 
      onClick={e => {
      e.preventDefault()
      dispatch(viewContent(CONSTANTS.VIEW_HOME_CONTENT))
      dispatch(selectMainLink(false))
    }}>
       home </Button>
    <Button style={menuItemStyles} type="submit" bsStyle="primary" 
      onClick={e => {
      e.preventDefault()
      //dispatch(viewContent(CONSTANTS.VIEW_SUB_LINK_LIST))
    }}>
       view main link form (-)</Button>
    <Button style={menuItemStyles} type="submit" bsStyle="primary" 
      onClick={e => {
      e.preventDefault()
      //dispatch(viewContent(CONSTANTS.VIEW_SUB_LINK_LIST))
    }}>
       view main link list (-)</Button>
    <Button style={menuItemStyles} type="submit" bsStyle="primary" 
      onClick={e => {
      e.preventDefault()
      dispatch(viewContent(CONSTANTS.VIEW_SUB_LINK_FORM))
    }}>
       view sub link form </Button>
    </div>
)

LeftMenu = connect()(LeftMenu)

export default LeftMenu
