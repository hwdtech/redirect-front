import React from 'react'
import { Button, Form, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { connect } from 'react-redux'
import { addSubLink } from '../actions'
import * as CONSTANTS from './CONSTANTS'
import * as styles from '../styles'

//const form ID
const inputTitle = 'formSubLinkTitle'
const inputRuleType = 'formSubLinkRuleType'
const inputRule = 'formSubLinkRule'


function FieldGroup({ id, label, help, type, placeholder  }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl type={type} placeholder={placeholder} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

const SubLinkForm = ({ dispatch, selectedMainLink, viewContent }) => (
  <div style = {(viewContent === CONSTANTS.VIEW_SUB_LINK_FORM || selectedMainLink !== false) ? styles.defaultStyles : styles.hidenStyles}>
    <h4>AddSubLink</h4>
    <Form horizontal
     onSubmit={e => {
      e.preventDefault()

      //fix by bootstrap
      let t = document.getElementById(inputRuleType)
      dispatch(addSubLink(
        selectedMainLink,
        document.getElementById(inputTitle).value, 
        t.options[t.selectedIndex].value
        ))
      document.getElementById(inputTitle).value ='';
    
    }}>

      <FieldGroup
        id={inputTitle}
        type="text"
        label="Title"
        placeholder="Enter title"
      />

      <FormGroup 
        controlId={inputRuleType}>
        <ControlLabel>RuleType</ControlLabel>
          <FormControl componentClass="select">
            <option value="text">text</option>
            <option value="email">email</option>
            <option value="password">password</option>
          </FormControl>
      </FormGroup>

      <Button type="submit" bsStyle="primary">
        addSubLink
      </Button>
    </Form>
  </div>
)

export default SubLinkForm