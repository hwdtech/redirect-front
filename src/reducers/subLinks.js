import { ADD_SUB_LINK, DELETE_SUB_LINK, DELETE_SUB_LINK_LIST_BY_MAIN_ID, EDIT_SUB_LINK } from '../actions/actionTypes'
import { selectAction } from '../utils' 


const add_sub_link = (state, action) => {
  return {
    id: action.id,
    mainId: action.mainId,
    title: action.title,
    link: action.link,
    ruleType: action.ruleType,
    rule: action.rule,
  }
}

const edit_sub_link = (state, action) => {
  if (state.id !== action.id) {
    return state
  }
  return Object.assign({}, state, {
    title: action.title,
    link: action.link,
    ruleType: action.ruleType,
    rule: action.rule,
  })
}

let subLinkActions = {
  ADD_SUB_LINK: add_sub_link,
  EDIT_SUB_LINK: edit_sub_link,
}

const subLink = (state, action) => {
  return selectAction(subLinkActions, state, action)
}

const add_sub_links = (state, action) => {
  return [
    ...state,
    subLink(undefined, action)
  ]
}

const delete_sub_links = (state, action) => {
  return state.filter(t => t.id !== action.id)
}

const delete_sub_links_by_main_id = (state, action) => {
  return state.filter(t => t.mainId !== action.id)
}

const edit_sub_links = (state, action) => {
  return state.map(t => subLink(t, action))
}

let subLinksActions = {
  ADD_SUB_LINK: add_sub_links,
  DELETE_SUB_LINK: delete_sub_links,
  DELETE_SUB_LINK_LIST_BY_MAIN_ID: delete_sub_links_by_main_id,
  EDIT_SUB_LINK: edit_sub_links,
}

const subLinks = (state = [], action) => {
  return selectAction(subLinksActions, state, action)
}

export default subLinks