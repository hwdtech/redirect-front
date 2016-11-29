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
	GET_SERVER_STATE_REQUEST: get_server_state,
	GET_SERVER_STATE_RESPONSE: get_server_state,
	GET_SERVER_STATE_ERROR: get_server_state,
	POST_SERVER_STATE_REQUEST: get_server_state,
	POST_SERVER_STATE_RESPONSE: post_server_state_response,
	POST_SERVER_STATE_ERROR: get_server_state,
	GET_MAIN_LINKS_REQUEST: get_server_state,
	GET_MAIN_LINKS_RESPONSE: get_server_state,
	GET_MAIN_LINKS_ERROR: get_server_state,
}

const serverState = (state = '', action) => {
	return selectAction(serverStateActions, state, action)
}

export default serverState