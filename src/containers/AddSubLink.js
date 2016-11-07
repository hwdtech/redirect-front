import React from 'react'
import { Input, Button, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import { connect } from 'react-redux'
import { addSubLink, connectSubToMain } from '../actions'

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

let AddSubLink = ({ dispatch, selectedMainLink, currentSubLink }) => {
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        //console.log(selectedMainLink);
        dispatch(addSubLink('Title', "rules.value"))//stub
        dispatch(connectSubToMain(selectedMainLink, currentSubLink))
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


const mapStateToProps = (state) => {
  return {
  selectedMainLink: state.selectedMainLink,
  currentSubLink: state.subLinks.length  // bad solution
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

AddSubLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSubLink)

export default AddSubLink