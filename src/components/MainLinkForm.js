import React from 'react'
import { Button, Form, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import * as CONSTANTS from './CONSTANTS'
import * as styles from '../styles'
import * as utils from '../utils'


function FieldGroup({ id, label, help, type, placeholder  }) {
	return (
		<FormGroup controlId={id}>
			<ControlLabel>{label}</ControlLabel>
			<FormControl type={type} placeholder={placeholder}/>
			{help && <HelpBlock>{help}</HelpBlock>}
		</FormGroup>
	)
}

const MainLinkForm = ({ onClick, viewContent, selected, inputMode, formContent }) => (
	<div style = {utils.isVisible(viewContent, CONSTANTS.MAIN_LINK_FORM ) ? styles.defaultStyles : styles.hidenStyles}>
		<h4>AddMainLink</h4>
		<form onSubmit={e => { onClick(e, inputMode, selected)}}>

			<FieldGroup
				id={CONSTANTS.INPUT_MAIN_LINK_TITLE}
				type="text"
				label="Title"
				placeholder="Enter title"
			/>

			<FieldGroup
				id={CONSTANTS.INPUT_MAIN_LINK_DEFAULT_LINK}
				type="text"
				label="Default Link"
				placeholder="Enter link"
			/>

			<Button type="submit" bsStyle="primary">
			Save Main Link
			</Button>
		</form>
	</div>
)

export default MainLinkForm