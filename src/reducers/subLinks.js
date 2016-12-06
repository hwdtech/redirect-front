import { selectAction } from '../utils';


const addSubLink = (state, action) => ({
  id: action.payload.id,
  mainlinkId: action.payload.mainlinkId,
  title: action.payload.title,
  link: action.payload.link,
  ruleType: action.payload.ruleType,
  rule: action.payload.rule,
  description: action.payload.description,
  createdAt: action.payload.createdAt,
  updatedAt: action.payload.updatedAt,
});

const editSubLink = (state, action) => {
  if (state.id !== action.payload.id) {
    return state;
  }
  return Object.assign({}, state, {
    title: action.payload.title,
    link: action.payload.link,
    ruleType: action.payload.ruleType,
    rule: action.payload.rule,
    description: action.payload.description,
    updatedAt: action.payload.updatedAt,
  });
};

const subLinkActions = {
  POST_TO_SERVER_RESPONSE_SUBLINK: addSubLink,
  PATCH_NOTE_OF_SERVER_RESPONSE_SUBLINK: editSubLink,
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
  POST_TO_SERVER_RESPONSE_SUBLINK: addSubLinks,
  DELETE_SUB_LINK: deleteSubLinks,
  DELETE_SUB_LINK_LIST_BY_MAIN_ID: deleteSubLinksByMainId,
  PATCH_NOTE_OF_SERVER_RESPONSE_SUBLINK: editSubLinks,
  GET_SUB_LINKS_RESPONSE: getSubLinksResponse,
};

const subLinks = (state = [], action) => (
  selectAction(subLinksActions, state, action)
);

export default subLinks;
