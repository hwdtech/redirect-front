import { ADD_VISIBLE_CONTENT, SET_VISIBLE_CONTENT } from '../actions/actionTypes'
import { selectAction } from '../utils' 


const add_visible_content = (state, action) => {
	return [...state, ...action.visibleContent]
}

const set_visible_content = (state, action) => {
	return [...action.visibleContent]
}

let viewContentActions = {
	SET_VISIBLE_CONTENT: set_visible_content,
	ADD_VISIBLE_CONTENT: add_visible_content,
}

const viewContent = (state = [], action) => {
	return selectAction(viewContentActions, state, action)
}

export default viewContent