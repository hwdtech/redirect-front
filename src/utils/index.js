export const isVisible = (viewContent, currentContent) => {
	return viewContent.filter(t => t===currentContent).length > 0 ? true : false
}