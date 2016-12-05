import { selectAction } from '../utils' ;


const changeInputMode = (state, action) => (
  action[state]
);

const defaultInputMode = (state, action) => (
  action.mode
);

const inputModeActions = {
  CHANGE_INPUT_MODE: changeInputMode,
  DEFAULT_INPUT_MODE: defaultInputMode,
};

const inputMode = (state = 'ADD', action) => (
  selectAction(inputModeActions, state, action)
);

export default inputMode;
