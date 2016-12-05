import { selectAction } from '../utils';


const deleteDuplicate = (array, subArray) => (
  array.filter(temp => !subArray.some(t => t === temp))
);

const addVisibleContent = (state, action) => (
  [
    ...state,
    ...deleteDuplicate(action.visibleContent, state),
  ]
);

const setVisibleContent = (state, action) => (
  [...action.visibleContent]
);

const deleteVisibleContent = (state, action) => (
  deleteDuplicate(state, action.visibleContent)
);

const switchVisibleContent = (state, action) => (
  [
    ...deleteDuplicate(state, action.visibleContent),
    ...deleteDuplicate(action.visibleContent, state),
  ]
);

const viewContentActions = {
  SET_VISIBLE_CONTENT: setVisibleContent,
  ADD_VISIBLE_CONTENT: addVisibleContent,
  DELETE_VISIBLE_CONTENT: deleteVisibleContent,
  SWITCH_VISIBLE_CONTENT: switchVisibleContent,
};

const viewContent = (state = ['MAIN_LINK_LIST'], action) => (
  selectAction(viewContentActions, state, action)
);

export default viewContent;
