import React from 'react'
import { Button, Form, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'
import { SUB_LINK_FORM, INPUT_SUB_LINK_TITLE, INPUT_SUB_LINK_LINK, INPUT_SUB_LINK_RULE_TYPE } from './CONSTANTS'
import { defaultStyles, hidenStyles } from '../styles'
import { isVisible } from '../utils'
import { RuleForm } from './RuleForms'


/* //validate but crash edit
class FormExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	value: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
        <FormGroup
          controlId={this.props.id}
          validationState={this.getValidationState()}
        >
          <ControlLabel>{this.props.label}</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          {this.props.help && <HelpBlock>{this.props.help}</HelpBlock>}
        </FormGroup>
    )
  }
}
*/

function FieldGroup({ id, label, help, type, placeholder, validation}) {
	return (
		<FormGroup 
			controlId={id}
		>
			<ControlLabel>{label}</ControlLabel>
			<FormControl 
				type={type} 
				placeholder={placeholder}
			/>
		</FormGroup>
	)
}

const SubLinkForm = ({ onClick, onCancelClick, selectInputType, selected, viewContent, inputMode, ruleType, formContent}) => (
	<div style = {(isVisible(viewContent, SUB_LINK_FORM)) ? defaultStyles : hidenStyles}>
		<h4>AddSubLink</h4>
		<Form horizontal>
			<FieldGroup 
				id={INPUT_SUB_LINK_TITLE}
				type="text"
				label="Title"
				placeholder="Enter title"
			/>


			<FieldGroup
				id={INPUT_SUB_LINK_LINK}
				type="text"
				label="Link"
				placeholder="Enter link"
			/>

			<FormGroup 
				controlId={INPUT_SUB_LINK_RULE_TYPE}
			>
				<ControlLabel>RuleType</ControlLabel>
				<FormControl 
					componentClass="select" 
					onChange={ () => { selectInputType() }}
				>
					<option value="DefaultRule">...</option>
					<option value="TextRule">text</option>
					<option value="CountryRule">country</option>
					<option value="BrowserRule">browser</option>
					<option value="TimeRule">time</option>
				</FormControl>
			</FormGroup>

			<RuleForm type={ruleType} />

			<Button 
				type="submit" 
				bsStyle="primary"
				onClick={e => { onClick(e, inputMode, selected, ruleType)}}
			>
				Save Sub Link
			</Button>
			<Button 
				type="submit" 
				bsStyle="primary" 
				onClick={e => { 
					onCancelClick(e, ruleType)
					//console.log("?",document.getElementById(INPUT_SUB_LINK_TITLE).type)
				}}>
				Cancel
			</Button>
		</Form>
	</div>
)

export default SubLinkForm