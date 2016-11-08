import * as actionTypes from '../actions/actionTypes'

let nextMainId = 0;
export const addMainLink = (title, defaultLink) => {
	//console.log(nextMainId)
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
export const addSubLink = (title, rules) => {
	//console.log(nextMainId)
	return {
		type: actionTypes.ADD_SUB_LINK,
		id: nextSubId++,
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