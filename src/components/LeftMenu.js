import React, { PropTypes } from 'react'
import { Nav, NavItem } from 'react-bootstrap'

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

function handleSelect(selectedKey) {
  console.log('selected ' + selectedKey);
}

const LeftMenu = () => (
  <Nav className="well" style={leftMenuStyles} bsStyle="pills" activeKey={1} onSelect={handleSelect}>
    <NavItem style={menuItemStyles} eventKey={1} href="/home"> Home </NavItem>
    <NavItem style={menuItemStyles} eventKey={2} > Main link List </NavItem>
    <NavItem style={menuItemStyles} eventKey={3} disabled> ... </NavItem>
  </Nav>
)

export default LeftMenu
