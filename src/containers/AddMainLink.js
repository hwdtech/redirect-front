import { connect } from 'react-redux'
import MainLinkForm from '../components/MainLinkForm'
import { addMainLink, editMainLink, defaultInputMode, setVisibleContent, selectMainLink } from '../actions'
import * as CONSTANTS from '../components/CONSTANTS'


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
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: (e, inputMode, selected,) => {
			updateMainLinks[inputMode](dispatch, selected)
			setDefault(e, dispatch, inputMode)
		},
		onCancelClick: (e, inputMode) => {
			setDefault(e, dispatch, inputMode)
		}
	}
}

const AddMainLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(MainLinkForm)

export default AddMainLink