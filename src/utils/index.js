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