import { connect } from 'react-redux'
import MainLinkForm from '../components/MainLinkForm'
import { addMainLink, editMainLink, changeInputMode, setVisibleContent, selectMainLink } from '../actions'
import * as CONSTANTS from '../components/CONSTANTS'


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
			e.preventDefault()
			if (inputMode === 'ADD') {
				dispatch(addMainLink(
					document.getElementById(CONSTANTS.INPUT_MAIN_LINK_TITLE).value, 
					document.getElementById(CONSTANTS.INPUT_MAIN_LINK_DEFAULT_LINK).value,
				))
			} else {
				dispatch(editMainLink(
					selected.mainLink, 
					document.getElementById(CONSTANTS.INPUT_MAIN_LINK_TITLE).value, 
					document.getElementById(CONSTANTS.INPUT_MAIN_LINK_DEFAULT_LINK).value,
				))
				dispatch(changeInputMode())
				dispatch(setVisibleContent([CONSTANTS.MAIN_LINK_LIST]))
				dispatch(selectMainLink(false))
			}
			document.getElementById(CONSTANTS.INPUT_MAIN_LINK_TITLE).value = '' 
			document.getElementById(CONSTANTS.INPUT_MAIN_LINK_DEFAULT_LINK).value = ''
		}
	}
}

const AddMainLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(MainLinkForm)

export default AddMainLink