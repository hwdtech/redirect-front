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
        return state
    default:
      return state
  }
}

export default subLinks