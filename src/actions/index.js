import * as actionTypes from '../actions/actionTypes'

let nextMainId = 0;
export const addMainLink = (title, defaultLink) => {
	return {
		type: actionTypes.ADD_MAIN_LINK,
		id: nextMainId++,
		title,
		defaultLink,
	}
}

export const editMainLink = (id, title, defaultLink) => {
	return {
		type: actionTypes.EDIT_MAIN_LINK,
		id,
		title,
		defaultLink,
	}
}

export const deleteMainLink = (id) => {
	return {
		type: actionTypes.DELETE_MAIN_LINK,
		id
	}
}

let nextSubId = 0;
export const addSubLink = (mainId, title, rules) => {
	return {
		type: actionTypes.ADD_SUB_LINK,
		id: nextSubId++,
		mainId,
		title,
		rules
	}
}

export const deleteSubLink = (id) => {
	return {
		type: actionTypes.DELETE_SUB_LINK,
		id
	}
}

export const deleteSubLinkListByMainId = (id) => {
	return {
		type: actionTypes.DELETE_SUB_LINK_LIST_BY_MAIN_ID,
		id
	}
}

export const editSubLink = (id, title, rules) => {
	return {
		type: actionTypes.EDIT_SUB_LINK,
		id,
		title,
		rules
	}
}

export const selectMainLink = (id) => {
	return {
		type: actionTypes.SELECT_MAIN_LINK,
		selected: id
	}
}

export const selectSubLink = (id) => {
	return {
		type: actionTypes.SELECT_SUB_LINK,
		selected: id
	}
}

export const setVisibleContent = (visibleContent) => {
	return {
		type: actionTypes.SET_VISIBLE_CONTENT,
		visibleContent
	}
}

export const addVisibleContent = (visibleContent) => {
	return {
		type: actionTypes.ADD_VISIBLE_CONTENT,
		visibleContent
	}
}

export const changeInputMode = () => {
	return {
		type: actionTypes.CHANGE_INPUT_MODE,
		'ADD': 'EDIT',
		'EDIT': 'ADD'
	}
}

export const defaultInputMode = () => {
	return {
		type: actionTypes.DEFAULT_INPUT_MODE,
		mode: 'ADD'
	}
}

export const selectRuleType = (ruleType) => {
	return {
		type: actionTypes.SELECT_RULE_TYPE,
		ruleType
	}
}