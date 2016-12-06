import { connect } from 'react-redux';
import SubLinkForm from '../components/SubLinkForm';
import { addVisibleContent, deleteVisibleContent, defaultInputMode, selectSubLink, selectRuleType, viewErrors, validateInput, validateReset } from '../actions';
import { postToServer, patchNoteOfServer } from '../middleware';
import * as CONSTANTS from '../components/CONSTANTS';
import { Rules } from '../components/RuleForms';
import { isValid } from '../utils';


const refreshSubLinkForm = (ruleType) => {
  document.getElementById(CONSTANTS.INPUT_SUB_LINK_TITLE).value = '';
  document.getElementById(CONSTANTS.INPUT_SUB_LINK_LINK).value = '';
  Rules[ruleType].set();
};

const updateSubLinksByAdd = (dispatch, selected, ruleType) => {
  const t = document.getElementById(CONSTANTS.INPUT_SUB_LINK_RULE_TYPE);

  dispatch(postToServer({
    body: {
      mainlinkId: selected.mainLink,
      title: document.getElementById(CONSTANTS.INPUT_SUB_LINK_TITLE).value,
      link: document.getElementById(CONSTANTS.INPUT_SUB_LINK_LINK).value,
      ruleType: t.options[t.selectedIndex].value,
      rule: Rules[ruleType].get(),
    },
    target: 'sublink',
  }));
};

const updateSubLinksByEdit = (dispatch, selected, ruleType) => {
  const t = document.getElementById(CONSTANTS.INPUT_SUB_LINK_RULE_TYPE);

  dispatch(patchNoteOfServer({
    body: {
      id: selected.subLink,
      data: {
        mainlinkId: selected.mainLink,
        title: document.getElementById(CONSTANTS.INPUT_SUB_LINK_TITLE).value,
        link: document.getElementById(CONSTANTS.INPUT_SUB_LINK_LINK).value,
        ruleType: t.options[t.selectedIndex].value,
        rule: Rules[ruleType].get(),
      },
    },
    target: 'sublink',
  }));
};

const updateSubLinks = {
  ADD: updateSubLinksByAdd,
  EDIT: updateSubLinksByEdit,
};

const setDefault = (e, dispatch, ruleType) => {
  e.preventDefault();
  dispatch(addVisibleContent([CONSTANTS.MAIN_LINK_LIST, CONSTANTS.SUB_LINK_LIST]));
  refreshSubLinkForm(ruleType);
  dispatch(defaultInputMode());
  dispatch(deleteVisibleContent(['ERROR_BLOCK']));
  dispatch(validateReset());
  dispatch(selectSubLink());
};

const mapStateToProps = state => ({
  formContent: state.subLinks.filter(t => (t.id === state.selected.subLink))[0],
  selected: state.selected,
  viewContent: state.viewContent,
  inputMode: state.inputMode,
  ruleType: state.ruleType,
  validateState: state.validateState,
});

const mapDispatchToProps = dispatch => ({
  onClick: (e, inputMode, selected, ruleType, validateState) => {
    if (isValid(validateState, ['title'])) {
      updateSubLinks[inputMode](dispatch, selected, ruleType);
      setDefault(e, dispatch, ruleType);
    } else {
      e.preventDefault();
      dispatch(viewErrors(['Title uncorrect!']));
      dispatch(addVisibleContent(['ERROR_BLOCK']));
    }
  },
  onCancelClick: (e, ruleType) => {
    setDefault(e, dispatch, ruleType);
  },
  selectInputType: () => {
    const t = document.getElementById(CONSTANTS.INPUT_SUB_LINK_RULE_TYPE);
    dispatch(selectRuleType(t.options[t.selectedIndex].value));
  },
  validate: (type, data) => {
    dispatch(validateInput(type, data));
  },
  formFiller: (formContent) => {
    if (formContent) {
      document.getElementById(CONSTANTS.INPUT_SUB_LINK_TITLE).value = formContent.title;
      document.getElementById(CONSTANTS.INPUT_SUB_LINK_LINK).value = formContent.link;
      document.getElementById(CONSTANTS.INPUT_SUB_LINK_RULE_TYPE).value = formContent.ruleType;
      Rules[formContent.ruleType].set(formContent.rule);
    }
  },
});

const AddSubLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubLinkForm);

export default AddSubLink;
