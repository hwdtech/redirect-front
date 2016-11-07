import * as actionTypes from '../actions/actionTypes'


const selectMainLink = (state = false, action) => {
  //console.log(state, action)
  switch (action.type) {
    case actionTypes.SELECT_MAIN_LINK:
      if (state === action.selectedMainLink) {
        return false
      } else {
        return action.selectedMainLink
      }
    default:
      return state
  }
}

export default selectMainLink