import { connect } from 'react-redux'
import SubLinkForm from '../components/SubLinkForm'
import { addSubLink, editSubLink, setVisibleContent, changeInputMode, selectSubLink, selectRuleType } from '../actions'
import * as CONSTANTS from '../components/CONSTANTS'


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
    dispatch,
    onClick: (e, inputMode, selected, ruleType) => {
      e.preventDefault()
      let t = document.getElementById(CONSTANTS.INPUT_SUB_LINK_RULE_TYPE)
      
      if (inputMode === 'ADD') {
        dispatch(addSubLink(
          selected.mainLink,
          document.getElementById(CONSTANTS.INPUT_SUB_LINK_TITLE).value, 
          document.getElementById(CONSTANTS.INPUT_SUB_LINK_LINK).value,
          t.options[t.selectedIndex].value,
          document.getElementById(ruleType).value
          ))
      } else {
        dispatch(editSubLink(
          selected.subLink,
          document.getElementById(CONSTANTS.INPUT_SUB_LINK_TITLE).value, 
          document.getElementById(CONSTANTS.INPUT_SUB_LINK_LINK).value,
          t.options[t.selectedIndex].value,
          document.getElementById(ruleType).value
          ))
        dispatch(changeInputMode())
        dispatch(selectSubLink())
      }
      dispatch(setVisibleContent([CONSTANTS.MAIN_LINK_LIST]))
    
      document.getElementById(CONSTANTS.INPUT_SUB_LINK_TITLE).value = '' 
      document.getElementById(CONSTANTS.INPUT_SUB_LINK_LINK).value = ''
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