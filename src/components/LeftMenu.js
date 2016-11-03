import React, { PropTypes } from 'react'
import { Nav, NavItem } from 'react-bootstrap'

const leftMenuStyles = {
	maxWidth: 200, 
	margin: '0 0 0px',
	height: '100%', /* 100% Full-height */
  position: 'fixed', /* Stay in place */
  left: 0
};

function handleSelect(selectedKey) {
  alert('selected ' + selectedKey);
}

const LeftMenu = () => (
  <Nav className="well" style={leftMenuStyles} bsStyle="pills" activeKey={1} onSelect={handleSelect}>
    <NavItem eventKey={1} href="/home">NavItem 1 content -----------------------------------</NavItem>
    <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
    <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
  </Nav>
)

export default LeftMenu
