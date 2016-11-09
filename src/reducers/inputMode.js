import * as actionTypes from '../actions/actionTypes'


const inputMode = (state = 'ADD', action) => {
  switch (action.type) {
    case actionTypes.CHANGE_INPUT_MODE:
      return action[state]
    default:
      return state
  }
}

export default inputMode