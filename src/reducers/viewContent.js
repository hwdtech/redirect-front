import * as actionTypes from '../actions/actionTypes'

const viewContent = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_VISIBLE_CONTENT:
      return [...state, ...action.visibleContent]
    case actionTypes.SET_VISIBLE_CONTENT:
    	return [...action.visibleContent]
    default:
      return state
  }
}

export default viewContent
