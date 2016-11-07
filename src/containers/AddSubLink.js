import React from 'react'
import { Input, Button, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import { connect } from 'react-redux'
import { addSubLink } from '../actions'

function FieldGroup({ id, label, help, placeholder}) {
  console.log(placeholder);
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl placeholder={placeholder}/>
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

let AddSubLink = ({ dispatch }) => {
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        console.log();
        dispatch(addSubLink('Title', "rules.value"))

      }}>

        <FieldGroup
          id="formControlsText"
          type="text"
          label="Text"
          placeholder="Enter text"
        />

        <Button type="submit" bsStyle="primary">
          addSubLink
        </Button>
      </form>
    </div>
  )
}
AddSubLink = connect()(AddSubLink)

export default AddSubLink