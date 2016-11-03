import * as actionTypes from '../actions/actionTypes'

let nextMainId = 0;
export const addMainLink = (title, defaultLink) => {
	//console.log(nextMainId)
	return {
		type: actionTypes.ADD_MAIN_LINK,
		id: nextMainId++,
		title,
		defaultLink
	}
}
