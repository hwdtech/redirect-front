import React, { PropTypes } from 'react';
import { Button, Form, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { MAIN_LINK_FORM, INPUT_MAIN_LINK_TITLE, INPUT_MAIN_LINK_DEFAULT_LINK } from './CONSTANTS';
import { defaultStyles, hidenStyles } from '../styles';
import { isVisible } from '../utils';


const FieldGroup = ({ id, label, help, status, type, placeholder, onChange }) => (
  <FormGroup
    controlId={id}
    validationState={status}
  >
    <ControlLabel>{label}</ControlLabel>
    <FormControl type={type} placeholder={placeholder} onChange={onChange} />
    {help && <HelpBlock>{help}</HelpBlock>}
  </FormGroup>
);


const MainLinkForm = ({ onClick, onCancelClick, viewContent, selected, inputMode, validate, validateState }) => (
  <div style={isVisible(viewContent, MAIN_LINK_FORM) ? defaultStyles : hidenStyles}>
    <h4>AddMainLink</h4>
    <Form horizontal>
      <FieldGroup
        id={INPUT_MAIN_LINK_TITLE}
        type="text"
        label="Title"
        placeholder="Enter title"
        status={validateState.title.status}
        help={validateState.title.help}
        onChange={() => {
          validate('title', document.getElementById(INPUT_MAIN_LINK_TITLE).value);
        }}
      />
      <FieldGroup
        id={INPUT_MAIN_LINK_DEFAULT_LINK}
        type="text"
        label="Default Link"
        placeholder="Enter link"
      />
      <Button
        type="submit"
        bsStyle="primary"
        onClick={e => onClick(e, inputMode, selected, validateState)}
      >
        Save Main Link
      </Button>
      <Button
        type="submit"
        bsStyle="primary"
        onClick={e => onCancelClick(e, inputMode)}
      >
        Cancel
      </Button>
    </Form>
  </div>
);

FieldGroup.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  help: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

MainLinkForm.propTypes = {
  onClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
  viewContent: PropTypes.arrayOf(PropTypes.string.isRequired),
  selected: PropTypes.shape({
    mainLink: PropTypes.number.isRequired,
    subLink: PropTypes.number.isRequired,
  }).isRequired,
  inputMode: PropTypes.string.isRequired,
  validateState: PropTypes.string.isRequired,
  validate: PropTypes.func.isRequired,
};

export default MainLinkForm;
