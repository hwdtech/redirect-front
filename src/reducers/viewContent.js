import { ADD_VISIBLE_CONTENT, SET_VISIBLE_CONTENT, DELETE_VISIBLE_CONTENT, SWITCH_VISIBLE_CONTENT } from '../actions/actionTypes'
import { selectAction } from '../utils' 


const deleteDuplicate = (array, subArray) => (
	array.filter(temp => !subArray.some(t => t === temp))
)

const add_visible_content = (state, action) => {
	return [
		...state, 
		...deleteDuplicate(action.visibleContent, state)
	]
}

const set_visible_content = (state, action) => {
	return [...action.visibleContent]
}

const delete_visible_content = (state, action) => {
	return deleteDuplicate(state, action.visibleContent)
}

const switch_visible_content = (state, action) => {
	return [
		...deleteDuplicate(state, action.visibleContent),
		...deleteDuplicate(action.visibleContent, state) 
	]
}

let viewContentActions = {
	SET_VISIBLE_CONTENT: set_visible_content,
	ADD_VISIBLE_CONTENT: add_visible_content,
	DELETE_VISIBLE_CONTENT: delete_visible_content,
	SWITCH_VISIBLE_CONTENT: switch_visible_content,
}

const viewContent = (state = ["MAIN_LINK_LIST",], action) => {
	return selectAction(viewContentActions, state, action)
}

export default viewContent