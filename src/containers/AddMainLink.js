import { connect } from 'react-redux'
import MainLinkForm from '../components/MainLinkForm'
import { addMainLink, editMainLink} from '../actions'
import { setVisibleContent, addVisibleContent, deleteVisibleContent } from '../actions'
import { defaultInputMode, selectMainLink, viewErrors } from '../actions'
import { validateInput, validateReset } from '../actions'
import { postToServer, patchNoteOfServer } from '../middleware'
import * as CONSTANTS from '../components/CONSTANTS'
import { isValid } from '../utils'


const updateMainLinksByAdd = (dispatch, selected) => {
	dispatch(addMainLink(
		document.getElementById(CONSTANTS.INPUT_MAIN_LINK_TITLE).value, 
		document.getElementById(CONSTANTS.INPUT_MAIN_LINK_DEFAULT_LINK).value,
	))
	dispatch(postToServer({
		body:{
			title: document.getElementById(CONSTANTS.INPUT_MAIN_LINK_TITLE).value, 
			defaultLink: document.getElementById(CONSTANTS.INPUT_MAIN_LINK_DEFAULT_LINK).value,
		}, 
		suburl:'/add/mainlink/',
	}))
}

const updateMainLinksByEdit = (dispatch, selected) => {
	dispatch(editMainLink(
		selected.mainLink, 
		document.getElementById(CONSTANTS.INPUT_MAIN_LINK_TITLE).value, 
		document.getElementById(CONSTANTS.INPUT_MAIN_LINK_DEFAULT_LINK).value,
	))
	dispatch(patchNoteOfServer({
		body:{
			id: selected.mainLink,
			data: {
				title: document.getElementById(CONSTANTS.INPUT_MAIN_LINK_TITLE).value, 
				defaultLink: document.getElementById(CONSTANTS.INPUT_MAIN_LINK_DEFAULT_LINK).value,
			}
		},
		target: 'mainlink',
	}))
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
			e.preventDefault()//
			if (isValid(validateState,['title'])) {
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