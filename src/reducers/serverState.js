import { VIEW_ERRORS } from '../actions/actionTypes'
import { selectAction } from '../utils' 

const get_server_state = (state, action) => {
	console.log(action.type, action.payload)
	return action.type
}

const post_server_state_response = (state, action) => {
	console.log(action.type, action.payload)
	return action.type
}

let serverStateActions = {
	GET_MAIN_LINKS_REQUEST: get_server_state,
	GET_MAIN_LINKS_RESPONSE: get_server_state,
	GET_MAIN_LINKS_ERROR: get_server_state,
	GET_SUB_LINKS_REQUEST: get_server_state,
	GET_SUB_LINKS_RESPONSE: get_server_state,
	GET_SUB_LINKS_ERROR: get_server_state,
}

const serverState = (state = '', action) => {
	return selectAction(serverStateActions, state, action)
}

export default serverState