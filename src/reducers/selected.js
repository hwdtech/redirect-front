import { selectAction } from '../utils';


const selectMainLink = (state, action) => {
  if (state.mainLink === action.selected) {
    return Object.assign({}, state, {
      mainLink: false,
    });
  }
  return Object.assign({}, state, {
    mainLink: action.selected,
  });
};

const selectSubLink = (state, action) => {
  if (state.subLink === action.selected) {
    return Object.assign({}, state, {
      subLink: false,
    });
  }
  return Object.assign({}, state, {
    subLink: action.selected,
  });
};

const selectedActions = {
  SELECT_MAIN_LINK: selectMainLink,
  SELECT_SUB_LINK: selectSubLink,
};

const selected = (state = { mainLink: false, subLink: false }, action) => (
  selectAction(selectedActions, state, action)
);

export default selected;
