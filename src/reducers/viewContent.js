import * as actionTypes from '../actions/actionTypes'


const viewContent = (state = "HOME", action) => {
  switch (action.type) {
    case actionTypes.VIEW_CONTENT:
      return action.visibleContent
    default:
      return state
  }
}

export default viewContent

/*
//new model: list of visible components

const viewContent = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_VISEBLE_CONTENT:
      return {...state, ...action.visibleContent}
    case actionTypes.SET_VISEBLE_CONTENT:
    	return action.visibleContent
    default:
      return state
  }
}

export default viewContent
*/