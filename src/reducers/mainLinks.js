import * as actionTypes from '../actions/actionTypes'

const mainLink = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_MAIN_LINK:
      return {
        id: action.id,
        title: action.title,
        defaultLink: action.defaultLink,
        subLinkIdList: action.subLinkIdList
      }
    case actionTypes.CONNECT_SUB_TO_MAIN:
      
      if (state.id !== action.mainId) {
        return state
      }

      return Object.assign({}, state, {
        subLinkIdList: [...state.subLinkIdList, action.subId]
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
    case actionTypes.CONNECT_SUB_TO_MAIN:
      return state.map(t => mainLink(t, action))
    default:
      return state
  }
}

export default mainLinks
//console.log(actionTypes.ADD_MAIN_LINK)