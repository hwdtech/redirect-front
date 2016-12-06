import { selectAction } from '../utils';


const addMainLink = (state, action) => ({
  id: action.payload.id,
  title: action.payload.title,
  defaultLink: action.payload.defaultLink,
  description: action.payload.description,
  createdAt: action.payload.createdAt,
  updatedAt: action.payload.updatedAt,
});

const editMainLink = (state, action) => {
  if (state.id !== action.payload.id) {
    return state;
  }
  return Object.assign({}, state, {
    title: action.payload.title,
    defaultLink: action.payload.defaultLink,
    description: action.payload.description,
    updatedAt: action.payload.updatedAt,
  });
};

const mainLinkActions = {
  POST_TO_SERVER_RESPONSE_MAINLINK: addMainLink,
  PATCH_NOTE_OF_SERVER_RESPONSE_MAINLINK: editMainLink,
};

const mainLink = (state, action) => (
  selectAction(mainLinkActions, state, action)
);

const addMainLinks = (state, action) => (
  [
    ...state,
    mainLink(undefined, action),
  ]
);

const deleteMainLinks = (state, action) => (
  state.filter(t => t.id !== action.id)
);

const editMainLinks = (state, action) => (
    state.map(t => mainLink(t, action))
);

const getMainLinksResponse = (state, action) => (
  action.payload
);

const mainLinksActions = {
  POST_TO_SERVER_RESPONSE_MAINLINK: addMainLinks,
  DELETE_MAIN_LINK: deleteMainLinks,
  PATCH_NOTE_OF_SERVER_RESPONSE_MAINLINK: editMainLinks,
  GET_MAIN_LINKS_RESPONSE: getMainLinksResponse,
};

const mainLinks = (state = [], action) => (
  selectAction(mainLinksActions, state, action)
);

export default mainLinks;
