import * as actionTypes from '../actions/actionTypes'


const subLink = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_SUB_LINK:
      return {
        id: action.id,
        mainId: action.mainId,
        title: action.title,
        rules: action.rules
      }
    case actionTypes.EDIT_SUB_LINK:
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, {
        title: action.title,
        rules: action.rules
      })
    default:
      return state
  }
}

const subLinks = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_SUB_LINK:
      return [
        ...state,
        subLink(undefined, action)
      ]
      case actionTypes.DELETE_SUB_LINK:
        return state.filter(t => t.id !== action.id)
      case actionTypes.DELETE_SUB_LINK_LIST_BY_MAIN_ID:
        return state.filter(t => t.mainId !== action.id)
      case actionTypes.EDIT_SUB_LINK:
        return state.map(t => subLink(t, action))
    default:
      return state
  }
}

export default subLinks