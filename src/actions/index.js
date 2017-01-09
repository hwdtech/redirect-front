import * as actionTypes from '../actions/actionTypes';

export const deleteMainLink = id => ({
  type: actionTypes.DELETE_MAIN_LINK,
  id,
});

export const deleteSubLink = id => ({
  type: actionTypes.DELETE_SUB_LINK,
  id,
});

export const deleteSubLinkListByMainId = id => ({
  type: actionTypes.DELETE_SUB_LINK_LIST_BY_MAIN_ID,
  id,
});

export const selectMainLink = id => ({
  type: actionTypes.SELECT_MAIN_LINK,
  selected: id,
});

export const selectSubLink = id => ({
  type: actionTypes.SELECT_SUB_LINK,
  selected: id,
});

export const setVisibleContent = visibleContent => ({
  type: actionTypes.SET_VISIBLE_CONTENT,
  visibleContent,
});

export const addVisibleContent = visibleContent => ({
  type: actionTypes.ADD_VISIBLE_CONTENT,
  visibleContent,
});

export const deleteVisibleContent = visibleContent => ({
  type: actionTypes.DELETE_VISIBLE_CONTENT,
  visibleContent,
});

export const switchVisibleContent = visibleContent => ({
  type: actionTypes.SWITCH_VISIBLE_CONTENT,
  visibleContent,
});

export const changeInputMode = () => ({
  type: actionTypes.CHANGE_INPUT_MODE,
  ADD: 'EDIT',
  EDIT: 'ADD',
});

export const defaultInputMode = () => ({
  type: actionTypes.DEFAULT_INPUT_MODE,
  mode: 'ADD',
});

export const selectRuleType = ruleType => ({
  type: actionTypes.SELECT_RULE_TYPE,
  ruleType,
});

export const viewErrors = errors => ({
  type: actionTypes.VIEW_ERRORS,
  errors,
});

export const validateInput = (inputType, data) => ({
  type: actionTypes.VALIDATE_INPUT,
  inputType,
  data,
});

export const validateReset = () => ({
  type: actionTypes.VALIDATE_RESET,
});

export const validateEdit = inputTypes => ({
  type: actionTypes.VALIDATE_EDIT,
  inputTypes,
});

export const addActorToChain = (chainId, index, actor) => ({
  type: 'ADD_ACTOR_TO_CHAIN',
  chainId,
  index,
  actor,
});

export const editActorInChain = (chainId, index, actor) => ({
  type: 'EDIT_ACTOR_IN_CHAIN',
  chainId,
  index,
  actor,
});

export const deleteActorFromChain = (chainId, index) => ({
  type: 'DELETE_ACTOR_FROM_CHAIN',
  chainId,
  index,
});
