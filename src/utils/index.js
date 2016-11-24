export const isVisible = (viewContent, currentContent) => {
	return viewContent.filter(t => t===currentContent).length > 0 ? true : false
}

export const selectAction = (someActions, state, action) => {
	try {
		return someActions[action.type](state, action)
	} catch (err) {
		return state
	}
}

export const isValid = (validateState, keys) => {
	for (let i = 0; i < keys.length; i++) {
		try {
			if (validateState[keys[i]].status !== 'success') {
				return false
			}
		} catch (err) {
			console.log(keys[i],' doesn`t exist in validateState')
			return false
		}
	}
	return true
}