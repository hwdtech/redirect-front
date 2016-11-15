import React from 'react'
import { Button } from 'react-bootstrap'
import { menuItemStyles } from '../styles'


const LeftMenuButton = ({onClick, text}) => (   
	<Button style={menuItemStyles} type="submit" bsStyle="primary" 
	onClick={onClick}> {text} </Button>
)

export default LeftMenuButton