import React from 'react'
import { Button, Form, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'
import { SUB_LINK_FORM, INPUT_SUB_LINK_TITLE, INPUT_SUB_LINK_LINK, INPUT_SUB_LINK_RULE_TYPE } from './CONSTANTS'
import { defaultStyles, hidenStyles } from '../styles'
import { isVisible } from '../utils'
import { RuleForm } from './RuleForms'


function FieldGroup({ id, label, help, status, type, placeholder, onChange  }) {
	return (
		<FormGroup 
			controlId={id}
			validationState={status}
		>
			<ControlLabel>{label}</ControlLabel>
			<FormControl type={type} placeholder={placeholder} onChange={onChange}/>
			{help && <HelpBlock>{help}</HelpBlock>}
		</FormGroup>
	)
}

const SubLinkForm = ({ onClick, onCancelClick, selectInputType, selected, viewContent, inputMode, ruleType, formContent, validate, validateState, formFiller}) => (
	<div style = {(isVisible(viewContent, SUB_LINK_FORM)) ? defaultStyles : hidenStyles}>
		<h4>AddSubLink</h4>
		<Form horizontal>
			<FieldGroup 
				id={INPUT_SUB_LINK_TITLE}
				type="text"
				label="Title"
				placeholder="Enter title"
				status = {validateState.title.status}
				help = {validateState.title.help}
				onChange={()=> {
					validate('title', document.getElementById(INPUT_SUB_LINK_TITLE).value)
				}}
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

			<Button 
				type="submit" 
				bsStyle="primary"
				onClick={e => { onClick(e, inputMode, selected, ruleType, validateState)}}
			>
				Save Sub Link
			</Button>
			<Button 
				type="submit" 
				bsStyle="primary" 
				onClick={e => { 
					onCancelClick(e, ruleType)
					//console.log("?",document.getElementById(INPUT_SUB_LINK_TITLE).type)
				}}>
				Cancel
			</Button>
		</Form>
	</div>
)

export default SubLinkForm