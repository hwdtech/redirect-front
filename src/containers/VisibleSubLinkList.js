import { connect } from 'react-redux'
import SubLinkList from '../components/SubLinkList'
import { selectRuleType, deleteSubLink, changeInputMode, setVisibleContent, selectSubLink} from '../actions'
import * as CONSTANTS from '../components/CONSTANTS'
import { Rules } from '../components/RuleForms'


const getVisibleSubLinks = (subLinks, selectedMainLink, mainId) =>
{
	if (mainId === selectedMainLink) {
		return subLinks.filter(t => (t.mainId === selectedMainLink));
	} else {
		return [];
	}
}

const formFiller = (title, link, ruleType, rule) => {
	document.getElementById(CONSTANTS.INPUT_SUB_LINK_TITLE).value = title 
	document.getElementById(CONSTANTS.INPUT_SUB_LINK_LINK).value = link
	document.getElementById(CONSTANTS.INPUT_SUB_LINK_RULE_TYPE).value = ruleType
	Rules[ruleType].set(rule)
}

const mapStateToProps = (state, ownProps) => {
	return {
		subLinks: getVisibleSubLinks(
		state.subLinks, 
		state.selected.mainLink,
		ownProps.mainId
	),
		selected: state.selected,
		viewContent: state.viewContent,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onDeleteSubLinkButtonClick: (id) => {
			dispatch(deleteSubLink(id))
		},
		onEditSubLinkButtonClick: (id, title, link, ruleType, rule) => {
			dispatch(changeInputMode())
			dispatch(setVisibleContent([CONSTANTS.SUB_LINK_FORM]))
			dispatch(selectSubLink(id))
			dispatch(selectRuleType(ruleType))
			formFiller(title, link, ruleType, rule)
		}
	}
}


const VisibleSubLinkList = connect(
	mapStateToProps,
	mapDispatchToProps
)(SubLinkList)

export default VisibleSubLinkList