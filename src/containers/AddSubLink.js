import { connect } from 'react-redux'
import SubLinkForm from '../components/SubLinkForm'
import { addSubLink, editSubLink, setVisibleContent, addVisibleContent, defaultInputMode, selectSubLink, selectRuleType, viewErrors } from '../actions'
import * as CONSTANTS from '../components/CONSTANTS'
import { Rules } from '../components/RuleForms'


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
} 

const mapStateToProps = (state) => {
	return {
		formContent: state.subLinks.filter(t => (t.id === state.selected.subLink))[0],
		selected: state.selected,
		viewContent: state.viewContent,
		inputMode: state.inputMode,
		ruleType: state.ruleType
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: (e, inputMode, selected, ruleType) => {
			updateSubLinks[inputMode](dispatch, selected, ruleType)
			setDefault(e, dispatch, ruleType)

		},
		onCancelClick: (e, ruleType) => {
			setDefault(e, dispatch, ruleType)
		},
		selectInputType: () => {
			let t = document.getElementById(CONSTANTS.INPUT_SUB_LINK_RULE_TYPE)
			dispatch(selectRuleType(t.options[t.selectedIndex].value))
		}
	}
}

const AddSubLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(SubLinkForm)

export default AddSubLink