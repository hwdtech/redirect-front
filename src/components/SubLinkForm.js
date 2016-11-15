import React from 'react'
import { Button, Form, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { connect } from 'react-redux'
import * as CONSTANTS from './CONSTANTS'
import * as styles from '../styles'
import * as utils from '../utils'
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
	<div style = {(utils.isVisible(viewContent, CONSTANTS.SUB_LINK_FORM) || selected.mainLink !== false) ? styles.defaultStyles : styles.hidenStyles}>
		<h4>AddSubLink</h4>
			<Form 
				horizontal
				onSubmit={e => { onClick(e, inputMode, selected, ruleType)}}
			>

			<FieldGroup
				id={CONSTANTS.INPUT_SUB_LINK_TITLE}
				type="text"
				label="Title"
				placeholder="Enter title"
			/>

			<FieldGroup
				id={CONSTANTS.INPUT_SUB_LINK_LINK}
				type="text"
				label="Link"
				placeholder="Enter link"
			/>

			<FormGroup 
				controlId={CONSTANTS.INPUT_SUB_LINK_RULE_TYPE}
			>
				<ControlLabel>RuleType</ControlLabel>
				<FormControl 
					componentClass="select" 
					onChange={ () => { selectInputType() }}
				>
					<option value="DefaultRule">...</option>
					<option value="TextRule">text</option>
					<option value="EmailRule">email</option>
					<option value="PasswordRule">password</option>
				</FormControl>
			</FormGroup>

			<RuleForm type={ruleType} />

			<Button type="submit" bsStyle="primary">
				addSubLink
			</Button>
		</Form>
	</div>
)

export default SubLinkForm