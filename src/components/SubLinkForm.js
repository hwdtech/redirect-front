import React from 'react'
import { Button, Form, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { connect } from 'react-redux'
import { addSubLink, editSubLink, showContent, changeInputMode, selectSubLink } from '../actions'
import * as CONSTANTS from './CONSTANTS'
import * as styles from '../styles'

//const form ID
const inputTitle = 'formSubLinkTitle'
const inputRuleType = 'formSubLinkRuleType'
const inputRule = 'formSubLinkRule'


function FieldGroup({ id, label, help, type, placeholder, defaultValue  }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl type={type} placeholder={placeholder} defaultValue={defaultValue}/>
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

const SubLinkForm = ({ dispatch, selected, viewContent, inputMode, formContent ={}}) => (
  <div style = {(viewContent === CONSTANTS.VIEW_SUB_LINK_FORM || selected.mainLink !== false) ? styles.defaultStyles : styles.hidenStyles}>
    <h4>AddSubLink</h4>
    <Form horizontal
     onSubmit={e => {
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
    }}>

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