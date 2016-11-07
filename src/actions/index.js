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