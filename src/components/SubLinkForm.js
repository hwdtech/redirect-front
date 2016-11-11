import React from 'react'
import { Button, Form, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { connect } from 'react-redux'
import { addSubLink, editSubLink, showContent, changeInputMode, selectSubLink, selectRuleType } from '../actions'
import * as CONSTANTS from './CONSTANTS'
import * as styles from '../styles'
import { RuleForm } from './RuleForms'

//const form ID
const inputTitle = 'formSubLinkTitle'
const inputRuleType = 'formSubLinkRuleType'
const inputRule = 'formSubLinkRule'

function selectInputType(dispatch) {
    let t = document.getElementById(inputRuleType)
    dispatch(selectRuleType(t.options[t.selectedIndex].value))
}

function sendForm(e, dispatch) {
      e.preventDefault()
      //fix by bootstrap
      let t = document.getElementById(inputRuleType)
      
      if (inputMode === 'ADD') {
        dispatch(addSubLink(
          selected.mainLink,
          document.getElementById(inputTitle).value, 
          t.options[t.selectedIndex].value
          ))
      } else {
        dispatch(editSubLink(
          selected.subLink,
          document.getElementById(inputTitle).value, 
          t.options[t.selectedIndex].value
          ))
        dispatch(changeInputMode())
        dispatch(selectSubLink())
      }
      dispatch(showContent(CONSTANTS.VIEW_MAIN_LINK_LIST))
    
      document.getElementById(inputTitle).value =''
}

function FieldGroup({ id, label, help, type, placeholder, defaultValue  }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl type={type} placeholder={placeholder} defaultValue={defaultValue}/>
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

const SubLinkForm = ({ dispatch, selected, viewContent, inputMode, ruleType, formContent ={}}) => (
  <div style = {(viewContent === CONSTANTS.VIEW_SUB_LINK_FORM || selected.mainLink !== false) ? styles.defaultStyles : styles.hidenStyles}>
    <h4>AddSubLink</h4>
    <Form horizontal
     onSubmit={e => { sendForm(e, dispatch)}}>

      <FieldGroup
        id={inputTitle}
        type="text"
        label="Title"
        placeholder="Enter title"
        defaultValue={formContent.title}
      />

      <FormGroup 
        controlId={inputRuleType}>
        <ControlLabel>RuleType</ControlLabel>
          <FormControl 
            componentClass="select" 
            onChange={ () => { selectInputType(dispatch) }}>
            <option value="default">...</option>
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