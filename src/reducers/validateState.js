import { selectAction } from '../utils';


const validateTitle = (data) => {
  const newState = {};
  if (data.length > 10) {
    newState.status = 'success';
  } else {
    newState.status = 'error';
    newState.help = 'Title must be greater than 10!';
  }
  return newState;
};

const validateByTypes = {
  title: validateTitle,
};

const defaultState = {
  title: { status: '' },
};

const validateInput = (state, action) => {
  try {
    const key = action.inputType;
    const newState = {};
    newState[key] = validateByTypes[key](action.data);
    return Object.assign({}, state, newState);
  } catch (err) {
    return state;
  }
};

const validateReset = () => (
  defaultState
);

const validateEdit = (state, action) => {
  const keys = action.inputTypes;
  const newState = {};
  for (let i = 0; i < keys.length; i += 1) {
    newState[keys[i]] = { status: 'success' };
  }
  return Object.assign({}, state, newState);
};

const validateStateActions = {
  VALIDATE_INPUT: validateInput,
  VALIDATE_RESET: validateReset,
  VALIDATE_EDIT: validateEdit,
};

const validateState = (state = defaultState, action) => (
  selectAction(validateStateActions, state, action)
);

export default validateState;
