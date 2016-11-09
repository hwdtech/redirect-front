import * as actionTypes from '../actions/actionTypes'

let nextMainId = 0;
export const addMainLink = (title, defaultLink) => {
	return {
		type: actionTypes.ADD_MAIN_LINK,
		id: nextMainId++,
		title,
		defaultLink,
		subLinkIdList: []
	}
}

export const connectSubToMain = (mainId, subId) => {
	return {
		type: actionTypes.CONNECT_SUB_TO_MAIN,
		mainId,
		subId
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

export const editSubLink = (title, rules) => {
	return {
		type: actionTypes.EDIT_SUB_LINK,
		title,
		rules
	}
}


export const selectMainLink = (id) => {
	return {
		type: actionTypes.SELECT_MAIN_LINK,
		selectedMainLink: id
	}
}

export const viewContent = (content) => {
	return {
		type: actionTypes.VIEW_CONTENT,
		visibleContent: content
	}
}