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
export const addSubLink = (mainId, title, link, ruleType, rule) => {
	return {
		type: actionTypes.ADD_SUB_LINK,
		id: nextSubId++,
		mainId,
		title,
		link,
		ruleType,
		rule,
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

export const editSubLink = (id, title, link, ruleType, rule) => {
	return {
		type: actionTypes.EDIT_SUB_LINK,
		id,
		title,
		link,
		ruleType,
		rule,
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

export const deleteVisibleContent = (visibleContent) => {
	return {
		type: actionTypes.DELETE_VISIBLE_CONTENT,
		visibleContent
	}
}

export const switchVisibleContent = (visibleContent) => {
	return {
		type: actionTypes.SWITCH_VISIBLE_CONTENT,
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

export const viewErrors = (errors) => {
	return {
		type: actionTypes.VIEW_ERRORS,
		errors
	}
}

export const validateInput = (inputType, data) => {
	return {
		type: actionTypes.VALIDATE_INPUT,
		inputType,
		data
	}
}

export const validateReset = () => {
	return {
		type: actionTypes.VALIDATE_RESET
	}
}

export const validateEdit = (inputTypes) => {
	return {
		type: actionTypes.VALIDATE_EDIT,
		inputTypes,
	}
}
