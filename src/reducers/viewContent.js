import * as actionTypes from '../actions/actionTypes'


const viewContent = (state = 'HOME', action) => {
  switch (action.type) {
    case actionTypes.VIEW_CONTENT:
      return action.visibleContent
    default:
      return state
  }
}

export default viewContent