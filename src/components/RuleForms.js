import React, { PropTypes } from 'react';
import { FormGroup, Checkbox, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';


const FieldGroup = ({ id, label, help, type, placeholder }) => (
  <FormGroup controlId={id}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl type={type} placeholder={placeholder} />
    {help && <HelpBlock>{help}</HelpBlock>}
  </FormGroup>
);

const CheckboxUnit = ({ id, value }) => (
  <Checkbox inline id={id}>{value}</Checkbox>
);

const simpleGetter = ruleType => (
  () => (document.getElementById(ruleType).value)
);

const simpleSetter = ruleType => (
  (value = '') => { document.getElementById(ruleType).value = value; }
);

const DefaultRule = () => (
  <div id="DefaultRule">
    <h4>Default</h4>
  </div>
);

const TextRule = () => (
  <div>
    <FieldGroup
      id="TextRule"
      type="text"
      label="Text"
      placeholder="Enter text"
    />
  </div>
);

const CheckboxForm = ({ name, items }) => (
  <div>
    <h4>{name}</h4>
    <FormGroup controlId={`${name}Rule`}>
      <Checkbox id={`${name}RuleIdAll`}>All</Checkbox>

      {items.map(value =>
        <CheckboxUnit
          key={`${name}RuleId${value}`}
          id={`${name}RuleId${value}`}
          value={value}
        />,
      )}
    </FormGroup>
  </div>
);

const checkboxGetter = (name, items) => (
  () => {
    if (document.getElementById(`${name}RuleIdAll`).checked) {
      return ['All'];
    }
    return items.filter(t => document.getElementById(`${name}RuleId${t}`).checked);
  }
);

const checkboxSetter = (name, items) => (
  (value = []) => {
    document.getElementById(`${name}RuleIdAll`).checked = false;
    items.map((t) => {
      document.getElementById(`${name}RuleId${t}`).checked = false;
      return false;
    });
    value.map((t) => {
      document.getElementById(`${name}RuleId${t}`).checked = true;
      return true;
    });
  }
);

const Countries = ['Russia', 'USA', 'Italy'];
const CountryRule = () => (
  <CheckboxForm name="Country" items={Countries} />
);

const Browsers = ['Chrom', 'Opera', 'Mozill'];
const BrowserRule = () => (
  <CheckboxForm name="Browser" items={Browsers} />
);

const TimeRule = () => (
  <div>
    <h4>Time</h4>
    <FieldGroup
      id="beginTimeFormId"
      type="time"
      label="From"
      placeholder="Enter time"
    />
    <FieldGroup
      id="endTimeFormId"
      type="time"
      label="To"
      placeholder="Enter time"
    />
  </div>
);

const timeGetter = () => (
  [
    document.getElementById('beginTimeFormId').value,
    document.getElementById('endTimeFormId').value,
  ]
);

const timeSetter = (value = []) => {
  document.getElementById('beginTimeFormId').value = value[0];
  document.getElementById('endTimeFormId').value = value[1];
};

export const Rules = {
  DefaultRule: {
    render: DefaultRule,
    get: () => '',
    set: () => {},
  },
  TextRule: {
    render: TextRule,
    get: simpleGetter('TextRule'),
    set: simpleSetter('TextRule'),
  },
  CountryRule: {
    render: CountryRule,
    get: checkboxGetter('Country', Countries),
    set: checkboxSetter('Country', Countries),
  },
  BrowserRule: {
    render: BrowserRule,
    get: checkboxGetter('Browser', Browsers),
    set: checkboxSetter('Browser', Browsers),
  },
  TimeRule: {
    render: TimeRule,
    get: timeGetter,
    set: timeSetter,
  },
};

const selectRule = (type) => {
  try {
    return Rules[type].render();
  } catch (err) {
    console.log('Doesn`t support type: ', type);
  }
  return Rules.DefaultRule.render();
};

export const RuleForm = ({ type }) => (
  <div>
    <h4>RuleForm</h4>
    {selectRule(type)}
  </div>
);

FieldGroup.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  help: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

CheckboxUnit.propTypes = {
  id: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
};

CheckboxForm.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string.isRequired),
};

RuleForm.propTypes = {
  type: PropTypes.string.isRequired,
};

export default RuleForm;
