import React from 'react'
import { Button, Form, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';


function FieldGroup({ id, label, help, type, placeholder  }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl type={type} placeholder={placeholder}/>
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
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

let Rules = {
	'DefaultRule': DefaultRule,
	'TextRule': TextRule,
	'EmailRule': EmailRule,
	'PasswordRule': PasswordRule
}

function selectRule(type) {
	try {
		return Rules[type]()
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