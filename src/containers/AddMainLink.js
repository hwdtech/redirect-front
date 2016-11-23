import { connect } from 'react-redux'
import MainLinkForm from '../components/MainLinkForm'
import { addMainLink, editMainLink, defaultInputMode, setVisibleContent, addVisibleContent, deleteVisibleContent, selectMainLink, viewErrors, validateInput, validateReset } from '../actions'
import * as CONSTANTS from '../components/CONSTANTS'


const validateMainLink = (validateState) => {
	let keys = Object.keys(validateState)
	for (let i = 0; i < keys.length; i++) {
		if (validateState[keys[i]].status !== 'success') {
			return false
		}
	}
	return true
}

const updateMainLinksByAdd = (dispatch, selected) => {
	dispatch(addMainLink(
		document.getElementById(CONSTANTS.INPUT_MAIN_LINK_TITLE).value, 
		document.getElementById(CONSTANTS.INPUT_MAIN_LINK_DEFAULT_LINK).value,
	))
}

const updateMainLinksByEdit = (dispatch, selected) => {
	dispatch(editMainLink(
		selected.mainLink, 
		document.getElementById(CONSTANTS.INPUT_MAIN_LINK_TITLE).value, 
		document.getElementById(CONSTANTS.INPUT_MAIN_LINK_DEFAULT_LINK).value,
	))
}

let updateMainLinks = {
	'ADD': updateMainLinksByAdd,
	'EDIT': updateMainLinksByEdit,
}

const setDefault = (e, dispatch, inputMode) => {
	e.preventDefault()
	dispatch(defaultInputMode())
	document.getElementById(CONSTANTS.INPUT_MAIN_LINK_TITLE).value = '' 
	document.getElementById(CONSTANTS.INPUT_MAIN_LINK_DEFAULT_LINK).value = ''
	dispatch(deleteVisibleContent(["ERROR_BLOCK"]))
	dispatch(validateReset())
	
	if (inputMode === 'EDIT') {
		dispatch(setVisibleContent([CONSTANTS.MAIN_LINK_LIST]))
		dispatch(selectMainLink(false))
	}
} 

const mapStateToProps = (state) => {
	return {
		formContent: state.mainLinks.filter(t => (t.id === state.selected.mainLink))[0],
		viewContent: state.viewContent,
		selected: state.selected,
		inputMode: state.inputMode,
		validateState: state.validateState,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: (e, inputMode, selected, validateState) => {
			if (validateMainLink(validateState)) {
				updateMainLinks[inputMode](dispatch, selected)
				setDefault(e, dispatch, inputMode)
			} else {
				e.preventDefault()
				dispatch(viewErrors(['Title uncorrect!']))
				dispatch(addVisibleContent(["ERROR_BLOCK"]))
			}
		},
		onCancelClick: (e, inputMode) => {
			setDefault(e, dispatch, inputMode)
		},
		validate: (type, data) => {
			dispatch(validateInput(type, data))
		},
	}
}

const AddMainLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(MainLinkForm)

export default AddMainLink