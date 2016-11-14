import { ADD_MAIN_LINK, DELETE_MAIN_LINK, EDIT_MAIN_LINK } from '../actions/actionTypes'
import { selectAction } from '../utils' 


const add_main_link = (state, action) => {
    return {
      id: action.id,
      title: action.title,
      defaultLink: action.defaultLink,
    } 
}

const edit_main_link = (state, action) => {
    if (state.id !== action.id) {
      return state
    }
    return Object.assign({}, state, {
      title: action.title,
      defaultLink: action.defaultLink,
    })
}

let mainLinkActions = {
    ADD_MAIN_LINK: add_main_link, 
    EDIT_MAIN_LINK: edit_main_link,

}

const mainLink = (state, action) => {
    return selectAction(mainLinkActions, state, action)
}

const add_main_links = (state, action) => {
    return [
      ...state,
      mainLink(undefined, action)
    ]  
}

const delete_main_links = (state, action) => {
    return state.filter(t => t.id !== action.id)
}

const edit_main_links = (state, action) => {
    return state.map(t => mainLink(t, action))
}

let mainLinksActions = {
    ADD_MAIN_LINK: add_main_links, 
    DELETE_MAIN_LINK: delete_main_links,
    EDIT_MAIN_LINK: edit_main_links,

}

const mainLinks = (state = [], action) => {
    return selectAction(mainLinksActions, state, action)
}

export default mainLinks