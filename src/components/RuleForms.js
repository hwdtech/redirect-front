import React from 'react'
import { Button, Form, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';


const TextRule = () => (
  <div>
    <h4>Text</h4>
  </div>
)

const EmailRule = () => (
  <div>
    <h4>Email</h4>
  </div>
)

const PasswordRule = () => (
  <div>
    <h4>Password</h4>
  </div>
)

const DefaultRule = () => (
  <div>
    <h4>Default</h4>
  </div>
)

export const RuleForm = ({type}) => (
  <div>
  	<h4>RuleForm</h4>
    <h4>{type}</h4>
  </div>
)

export default RuleForm