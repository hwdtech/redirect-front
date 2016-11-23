import { VALIDATE_INPUT } from '../actions/actionTypes'
import { selectAction } from '../utils' 

const validate_title = (data) => {
	let newState ={}
	if (data.length > 10) {
		newState.status = 'success'
	} else {
		newState.status = 'error'
		newState.help = 'Title must be greater than 10!'
	}
	return newState
}

let validateByTypes = {
	title: validate_title,
}

let defaultState = {
	title:{status:''},
}

const validate_input = (state, action) => {
	try {
		let key = action.inputType
		let newState = {}
		newState[key] = validateByTypes[key](action.data)
		return Object.assign({}, state, newState)
	} catch (err) {
		return state	
	}
}
const validate_reset = (state, action) => {
	return defaultState
}

let validateStateActions = {
	VALIDATE_INPUT: validate_input,
	VALIDATE_RESET: validate_reset,
}

const validateState = (state = defaultState, action) => {
	return selectAction(validateStateActions, state, action)
}

export default validateState