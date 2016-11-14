import { SELECT_MAIN_LINK, SELECT_SUB_LINK } from '../actions/actionTypes'
import { selectAction } from '../utils' 


const select_main_link = (state, action) => {
  if (state.mainLink === action.selected) {
    return Object.assign({}, state, {
      mainLink: false,
    }) 
  } else {
    return Object.assign({}, state, {
      mainLink: action.selected,
    }) 
  }
}

const select_sub_link = (state, action) => {
  if (state.subLink === action.selected) {
    return Object.assign({}, state, {
      subLink: false,
    }) 
  } else {
    return Object.assign({}, state, {
      subLink: action.selected,
    }) 
  }
}

let selectedActions = {
  SELECT_MAIN_LINK: select_main_link,
  SELECT_SUB_LINK: select_sub_link,
}

const selected = (state = {mainLink: false, subLink: false}, action) => {
  return selectAction(selectedActions, state, action)
}

export default selected