import { VALIDATE_INPUT, VALIDATE_RESET, VALIDATE_EDIT } from '../actions/actionTypes'
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

const validate_edit = (state, action) => {
	let keys = action.inputTypes
	let newState = {} 
	for (let i = 0; i < keys.length; i++) {
		newState[keys[i]] = {status:'success'}
	}
	return Object.assign({}, state, newState)
}

let validateStateActions = {
	VALIDATE_INPUT: validate_input,
	VALIDATE_RESET: validate_reset,
	VALIDATE_EDIT: validate_edit,
}

const validateState = (state = defaultState, action) => {
	return selectAction(validateStateActions, state, action)
}

export default validateState