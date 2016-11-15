import React from 'react'
import { Button, Form, FormGroup, Checkbox, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';


const FieldGroup = ({ id, label, help, type, placeholder  }) => (
	<FormGroup controlId={id}>
		<ControlLabel>{label}</ControlLabel>
		<FormControl type={type} placeholder={placeholder}/>
		{help && <HelpBlock>{help}</HelpBlock>}
	</FormGroup>
)

const CheckboxUnit = ({id, value}) => (
	<Checkbox inline id={id}>{value}</Checkbox>
)

const simpleGetter = (ruleType) => {
	return () => (document.getElementById(ruleType).value)
}

const simpleSetter = (ruleType) => {
	return (value) => { document.getElementById(ruleType).value = value}
}

const DefaultRule = () => (
	<div id='DefaultRule'>
		<h4>Default</h4>
	</div>
)

const TextRule = () => (
	<div>
		<FieldGroup
			id="TextRule"
			type="text"
			label="Text"
			placeholder="Enter text"
		/>
	</div>
)

const EmailRule = () => (
	<div>
		<h4>Email</h4>
		<FieldGroup
			id="EmailRule"
			type="email"
			label="Email address"
			placeholder="Enter email"
		/>
	</div>
)

const PasswordRule = () => (
	<div>
		<h4>Password</h4>
		<FieldGroup
			id="PasswordRule"
			label="Password"
			type="password"
		/>
	</div>
)


let Countries = ['Russia', 'USA', 'Italy']
const CountryRule = () => (
	<div>
		<h4>Country</h4>
		<FormGroup controlId="CountryRule">
			<Checkbox id="CountryRuleIdAll">All</Checkbox>

			{Countries.map( value =>
				<CheckboxUnit 
					key={"CountryRuleId"+value}
					id={"CountryRuleId"+value}
					value={value}
				/>
			)}
		</FormGroup>
	</div>
)
const getCountryRuleValue = () => {
	if (document.getElementById("CountryRuleIdAll").checked) {
		return ["All"]
	} else {
		return Countries.filter(t => document.getElementById("CountryRuleId"+t).checked)
	}
}
const setCountryRuleValue = (value) => {
	//refreshed
	value.map(t => {document.getElementById("CountryRuleId"+t).checked = true})
}

export const Rules = {
	'DefaultRule': {
		render: DefaultRule,
		getter: () => '',
		setter: (value) => '',
	},
	'TextRule': {
		render: TextRule,
		getter: simpleGetter('TextRule'),
		setter: simpleSetter('TextRule'),
	},
	'EmailRule': {
		render: EmailRule,
		getter: simpleGetter('EmailRule'),
		setter: simpleSetter('EmailRule')
	}, 
	'PasswordRule': {
		render: PasswordRule,
		getter: simpleGetter('PasswordRule'),
		setter: simpleSetter('PasswordRule'),
	}, 
	'CountryRule': {
		render: CountryRule,
		getter: getCountryRuleValue,
		setter: setCountryRuleValue,
	}, 
}

function selectRule(type) {
	try {
		return Rules[type].render()
	} catch (err) {
		console.log('Doesn`t support type: ', type)
	}
}

export const RuleForm = ({type}) => (
	<div>
		<h4>RuleForm</h4>
		{selectRule(type)}
	</div>
)

export default RuleForm