import { connect } from 'react-redux'
import SubLinkForm from '../components/SubLinkForm'
import { addSubLink, editSubLink } from '../actions'
import { setVisibleContent, addVisibleContent, deleteVisibleContent } from '../actions'
import { defaultInputMode, selectSubLink, selectRuleType, viewErrors } from '../actions'
import { validateInput, validateReset } from '../actions'
import { postToServer, patchNoteOfServer } from '../middleware'
import * as CONSTANTS from '../components/CONSTANTS'
import { Rules } from '../components/RuleForms'
import { isValid } from '../utils'


const refreshSubLinkForm = (ruleType) => {
	document.getElementById(CONSTANTS.INPUT_SUB_LINK_TITLE).value = '' 
	document.getElementById(CONSTANTS.INPUT_SUB_LINK_LINK).value = ''
	Rules[ruleType].set()
} 

const updateSubLinksByAdd = (dispatch, selected, ruleType) => {
	let t = document.getElementById(CONSTANTS.INPUT_SUB_LINK_RULE_TYPE)
	
	dispatch(addSubLink(
		selected.mainLink,
		document.getElementById(CONSTANTS.INPUT_SUB_LINK_TITLE).value, 
		document.getElementById(CONSTANTS.INPUT_SUB_LINK_LINK).value,
		t.options[t.selectedIndex].value,
		Rules[ruleType].get()
	))
	dispatch(postToServer({
		body:{
			mainlinkId: selected.mainLink,
			title: document.getElementById(CONSTANTS.INPUT_SUB_LINK_TITLE).value, 
			link: document.getElementById(CONSTANTS.INPUT_SUB_LINK_LINK).value,
			ruleType: t.options[t.selectedIndex].value,
			rule: Rules[ruleType].get()
		}, 
		target:'sublink',
	}))
}

const updateSubLinksByEdit = (dispatch, selected, ruleType) => {
	let t = document.getElementById(CONSTANTS.INPUT_SUB_LINK_RULE_TYPE)

	dispatch(editSubLink(
		selected.subLink,
		document.getElementById(CONSTANTS.INPUT_SUB_LINK_TITLE).value, 
		document.getElementById(CONSTANTS.INPUT_SUB_LINK_LINK).value,
		t.options[t.selectedIndex].value,
		Rules[ruleType].get()
	))

	dispatch(patchNoteOfServer({
		body:{
			id: selected.subLink,
			data: {
				mainlinkId: selected.mainLink,
				title: document.getElementById(CONSTANTS.INPUT_SUB_LINK_TITLE).value, 
				link: document.getElementById(CONSTANTS.INPUT_SUB_LINK_LINK).value,
				ruleType: t.options[t.selectedIndex].value,
				rule: Rules[ruleType].get()
			}
		}, 
		target:'sublink',
	}))
	
	dispatch(selectSubLink())
}

let updateSubLinks = {
	'ADD': updateSubLinksByAdd,
	'EDIT': updateSubLinksByEdit,
}

const setDefault = (e, dispatch, ruleType) => {
	e.preventDefault()
	dispatch(addVisibleContent([CONSTANTS.MAIN_LINK_LIST,CONSTANTS.SUB_LINK_LIST]))
	refreshSubLinkForm(ruleType)
	dispatch(defaultInputMode())
	dispatch(deleteVisibleContent(["ERROR_BLOCK"]))
	dispatch(validateReset())
} 

const mapStateToProps = (state) => {
	return {
		formContent: state.subLinks.filter(t => (t.id === state.selected.subLink))[0],
		selected: state.selected,
		viewContent: state.viewContent,
		inputMode: state.inputMode,
		ruleType: state.ruleType,
		validateState: state.validateState,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: (e, inputMode, selected, ruleType, validateState) => {
			if (isValid(validateState,['title'])) {
				updateSubLinks[inputMode](dispatch, selected, ruleType)
				setDefault(e, dispatch, ruleType)
			} else {
				e.preventDefault()
				dispatch(viewErrors(['Title uncorrect!']))
				dispatch(addVisibleContent(["ERROR_BLOCK"]))
			}

		},
		onCancelClick: (e, ruleType) => {
			setDefault(e, dispatch, ruleType)
		},
		selectInputType: () => {
			let t = document.getElementById(CONSTANTS.INPUT_SUB_LINK_RULE_TYPE)
			dispatch(selectRuleType(t.options[t.selectedIndex].value))
		},
		validate: (type, data) => {
			dispatch(validateInput(type, data))
		},
	}
}

const AddSubLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(SubLinkForm)

export default AddSubLink