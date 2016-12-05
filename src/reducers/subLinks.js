import { selectAction } from '../utils';


const addSubLink = (state, action) => ({
  id: action.id,
  mainlinkId: action.mainlinkId,
  title: action.title,
  link: action.link,
  ruleType: action.ruleType,
  rule: action.rule,
});

const editSubLink = (state, action) => {
  if (state.id !== action.id) {
    return state;
  }
  return Object.assign({}, state, {
    title: action.title,
    link: action.link,
    ruleType: action.ruleType,
    rule: action.rule,
  });
};

const subLinkActions = {
  ADD_SUB_LINK: addSubLink,
  EDIT_SUB_LINK: editSubLink,
};

const subLink = (state, action) => (
  selectAction(subLinkActions, state, action)
);

const addSubLinks = (state, action) => (
  [
    ...state,
    subLink(undefined, action),
  ]
);

const deleteSubLinks = (state, action) => (
  state.filter(t => t.id !== action.id)
);

const deleteSubLinksByMainId = (state, action) => (
  state.filter(t => t.mainlinkId !== action.id)
);

const editSubLinks = (state, action) => (
  state.map(t => subLink(t, action))
);

const getSubLinksResponse = (state, action) => (
  action.payload
);

const subLinksActions = {
  ADD_SUB_LINK: addSubLinks,
  DELETE_SUB_LINK: deleteSubLinks,
  DELETE_SUB_LINK_LIST_BY_MAIN_ID: deleteSubLinksByMainId,
  EDIT_SUB_LINK: editSubLinks,
  GET_SUB_LINKS_RESPONSE: getSubLinksResponse,
};

const subLinks = (state = [], action) => (
  selectAction(subLinksActions, state, action)
);

export default subLinks;
