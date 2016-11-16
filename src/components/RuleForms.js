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
	return (value = '') => { document.getElementById(ruleType).value = value}
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

const CheckboxForm = ({name, items}) => (
	<div>
		<h4>{name}</h4>
		<FormGroup controlId={name+"Rule"}>
			<Checkbox id={name+"RuleIdAll"}>All</Checkbox>

			{items.map( value =>
				<CheckboxUnit 
					key={name+"RuleId"+value}
					id={name+"RuleId"+value}
					value={value}
				/>
			)}
		</FormGroup>
	</div>
)

const checkboxGetter = (name, items) => {
	return () => {	
		if (document.getElementById(name+"RuleIdAll").checked) {
			return ["All"]
		} else {
			return items.filter(t => document.getElementById(name+"RuleId"+t).checked)
		}
	}
}

const checkboxSetter = (name, items) => {
	return (value = []) => { 
		document.getElementById(name+"RuleIdAll").checked = false
		items.map(t => {document.getElementById(name+"RuleId"+t).checked = false})
		value.map(t => {document.getElementById(name+"RuleId"+t).checked = true})
	}
}

let Countries = ['Russia', 'USA', 'Italy']
const CountryRule = () => (
	<CheckboxForm name="Country" items={Countries}/>
)

let Browsers = ['Chrom', 'Opera', 'Mozill']
const BrowserRule = () => (
	<CheckboxForm name="Browser" items={Browsers}/>
)

export const Rules = {
	'DefaultRule': {
		render: DefaultRule,
		get: () => '',
		set: (value = '') => {},
	},
	'TextRule': {
		render: TextRule,
		get: simpleGetter('TextRule'),
		set: simpleSetter('TextRule'),
	},
	'CountryRule': {
		render: CountryRule,
		get: checkboxGetter("Country", Countries),
		set: checkboxSetter("Country", Countries),
	}, 
	'BrowserRule': {
		render: BrowserRule,
		get: checkboxGetter("Browser", Browsers),
		set: checkboxSetter("Browser", Browsers),
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