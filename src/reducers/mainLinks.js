import { selectAction } from '../utils';


const addMainLink = (state, action) => ({
  id: action.id,
  title: action.title,
  defaultLink: action.defaultLink,
});

const editMainLink = (state, action) => {
  if (state.id !== action.id) {
    return state;
  }
  return Object.assign({}, state, {
    title: action.title,
    defaultLink: action.defaultLink,
  });
};

const mainLinkActions = {
  ADD_MAIN_LINK: addMainLink,
  EDIT_MAIN_LINK: editMainLink,
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
  ADD_MAIN_LINK: addMainLinks,
  DELETE_MAIN_LINK: deleteMainLinks,
  EDIT_MAIN_LINK: editMainLinks,
  GET_MAIN_LINKS_RESPONSE: getMainLinksResponse,
};

const mainLinks = (state = [], action) => (
  selectAction(mainLinksActions, state, action)
);

export default mainLinks;
