import React from 'react'
import { Button, Form, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'
import { SUB_LINK_FORM, INPUT_SUB_LINK_TITLE, INPUT_SUB_LINK_LINK, INPUT_SUB_LINK_RULE_TYPE } from './CONSTANTS'
import { defaultStyles, hidenStyles } from '../styles'
import { isVisible } from '../utils'
import { RuleForm } from './RuleForms'


function FieldGroup({ id, label, help, type, placeholder}) {
	return (
		<FormGroup controlId={id}>
			<ControlLabel>{label}</ControlLabel>
			<FormControl type={type} placeholder={placeholder}/>
			{help && <HelpBlock>{help}</HelpBlock>}
		</FormGroup>
	)
}

const SubLinkForm = ({ onClick, selectInputType, selected, viewContent, inputMode, ruleType, formContent ={}}) => (
	<div style = {(isVisible(viewContent, SUB_LINK_FORM)) ? defaultStyles : hidenStyles}>
		<h4>AddSubLink</h4>
			<Form 
				horizontal
				onSubmit={e => { onClick(e, inputMode, selected, ruleType)}}
			>

			<FieldGroup
				id={INPUT_SUB_LINK_TITLE}
				type="text"
				label="Title"
				placeholder="Enter title"
			/>

			<FieldGroup
				id={INPUT_SUB_LINK_LINK}
				type="text"
				label="Link"
				placeholder="Enter link"
			/>

			<FormGroup 
				controlId={INPUT_SUB_LINK_RULE_TYPE}
			>
				<ControlLabel>RuleType</ControlLabel>
				<FormControl 
					componentClass="select" 
					onChange={ () => { selectInputType() }}
				>
					<option value="DefaultRule">...</option>
					<option value="TextRule">text</option>
					<option value="CountryRule">country</option>
					<option value="BrowserRule">browser</option>
					<option value="TimeRule">time</option>
				</FormControl>
			</FormGroup>

			<RuleForm type={ruleType} />

			<Button type="submit" bsStyle="primary">
				Save Sub Link
			</Button>
		</Form>
	</div>
)

export default SubLinkForm