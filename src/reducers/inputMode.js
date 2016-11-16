import CHANGE_INPUT_MODE from '../actions/actionTypes'
import { selectAction } from '../utils' 


const change_input_mode = (state, action) => {
	return action[state]
}

const default_input_mode = (state, action) => {
	return action.mode
}

let inputModeActions = {
	CHANGE_INPUT_MODE: change_input_mode,
	DEFAULT_INPUT_MODE: default_input_mode,
}

const inputMode = (state = 'ADD', action) => {
	return selectAction(inputModeActions, state, action)
}

export default inputMode