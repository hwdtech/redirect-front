import * as actionTypes from '../actions/actionTypes'


const select = (state = {mainLink: false, subLink: false}, action) => {
  switch (action.type) {
    case actionTypes.SELECT_MAIN_LINK:
      if (state.mainLink === action.selected) {
        return Object.assign({}, state, {
          mainLink: false,
        }) 
      } else {
        return Object.assign({}, state, {
          mainLink: action.selected,
        }) 
      }
    case actionTypes.SELECT_SUB_LINK:
      if (state.mainLink === action.selected) {
        return Object.assign({}, state, {
          subLink: false,
        }) 
      } else {
        return Object.assign({}, state, {
          subLink: action.selected,
        }) 
      }
    default:
      return state
  }
}

export default select