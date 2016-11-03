import React from 'react'
import { DropdownButton, MenuItem } from 'react-bootstrap'
const wellStyles = {maxWidth: 200, margin: '0 auto 10px'};

const LeftMenu = () => (
	<div>
	LeftMenu
	<DropdownButton title="Dropdown">
      <MenuItem header>Header</MenuItem>
      <MenuItem>link</MenuItem>
      <MenuItem divider/>
      <MenuItem header>Header</MenuItem>
      <MenuItem>link</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem title="See? I have a title.">
        link with title
      </MenuItem>
    </DropdownButton>
	</div>
)

export default LeftMenu