import * as actionTypes from '../actions/actionTypes'


const mainLink = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_MAIN_LINK:
      return {
        id: action.id,
        title: action.title,
        defaultLink: action.defaultLink,
      }
    case actionTypes.EDIT_MAIN_LINK:
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, {
        title: action.title,
        defaultLink: action.defaultLink,
      })
    default:
      return state
  }
}

const mainLinks = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_MAIN_LINK:
      return [
        ...state,
        mainLink(undefined, action)
      ]
    case actionTypes.DELETE_MAIN_LINK:
        return state.filter(t => t.id !== action.id)
    case actionTypes.EDIT_MAIN_LINK:
        return state.map(t => mainLink(t, action))
    default:
      return state
  }
}

export default mainLinks