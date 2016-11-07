import * as actionTypes from '../actions/actionTypes'


const selectMainLink = (state = false, action) => {
  switch (action.type) {
    case actionTypes.SELECT_MAIN_LINK:
        return action.id
    default:
      return state
  }
}

export default selectMainLink