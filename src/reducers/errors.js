import { VIEW_ERRORS } from '../actions/actionTypes'
import { selectAction } from '../utils' 


const view_errors = (state, action) => {
	return [...action.errors]
}

let errorsActions = {
	VIEW_ERRORS: view_errors,
}

const errors = (state = [], action) => {
	return selectAction(errorsActions, state, action)
}

export default errors