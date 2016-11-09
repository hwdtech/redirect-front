import * as actionTypes from '../actions/actionTypes'

const mainLink = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_MAIN_LINK:
      return {
        id: action.id,
        title: action.title,
        defaultLink: action.defaultLink,
      }
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
    default:
      return state
  }
}

export default mainLinks
//console.log(actionTypes.ADD_MAIN_LINK)