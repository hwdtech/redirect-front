import React from 'react'
import { Button, Form, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { MAIN_LINK_FORM, INPUT_MAIN_LINK_TITLE, INPUT_MAIN_LINK_DEFAULT_LINK } from './CONSTANTS'
import { defaultStyles, hidenStyles } from '../styles'
import { isVisible } from '../utils'


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
	<div style = {isVisible(viewContent, MAIN_LINK_FORM ) ? defaultStyles : hidenStyles}>
		<h4>AddMainLink</h4>
		<form onSubmit={e => { onClick(e, inputMode, selected)}}>

			<FieldGroup
				id={INPUT_MAIN_LINK_TITLE}
				type="text"
				label="Title"
				placeholder="Enter title"
			/>

			<FieldGroup
				id={INPUT_MAIN_LINK_DEFAULT_LINK}
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