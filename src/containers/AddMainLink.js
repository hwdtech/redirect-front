import { connect } from 'react-redux';
import MainLinkForm from '../components/MainLinkForm';
import { addMainLink, editMainLink, setVisibleContent, addVisibleContent, deleteVisibleContent, defaultInputMode, selectMainLink, viewErrors, validateInput, validateReset } from '../actions';
import { postToServer, patchNoteOfServer } from '../middleware';
import * as CONSTANTS from '../components/CONSTANTS';
import { isValid } from '../utils';


const updateMainLinksByAdd = (dispatch) => {
  dispatch(addMainLink(
    document.getElementById(CONSTANTS.INPUT_MAIN_LINK_TITLE).value,
    document.getElementById(CONSTANTS.INPUT_MAIN_LINK_DEFAULT_LINK).value,
  ));
  dispatch(postToServer({
    body: {
      title: document.getElementById(CONSTANTS.INPUT_MAIN_LINK_TITLE).value,
      defaultLink: document.getElementById(CONSTANTS.INPUT_MAIN_LINK_DEFAULT_LINK).value,
    },
    target: 'mainlink',
  }));
};

const updateMainLinksByEdit = (dispatch, selected) => {
  dispatch(editMainLink(
    selected.mainLink,
    document.getElementById(CONSTANTS.INPUT_MAIN_LINK_TITLE).value,
    document.getElementById(CONSTANTS.INPUT_MAIN_LINK_DEFAULT_LINK).value,
  ));
  dispatch(patchNoteOfServer({
    body: {
      id: selected.mainLink,
      data: {
        title: document.getElementById(CONSTANTS.INPUT_MAIN_LINK_TITLE).value,
        defaultLink: document.getElementById(CONSTANTS.INPUT_MAIN_LINK_DEFAULT_LINK).value,
      },
    },
    target: 'mainlink',
  }));
};

const updateMainLinks = {
  ADD: updateMainLinksByAdd,
  EDIT: updateMainLinksByEdit,
};

const setDefault = (e, dispatch, inputMode) => {
  e.preventDefault();
  dispatch(defaultInputMode());
  document.getElementById(CONSTANTS.INPUT_MAIN_LINK_TITLE).value = '';
  document.getElementById(CONSTANTS.INPUT_MAIN_LINK_DEFAULT_LINK).value = '';
  dispatch(deleteVisibleContent(['ERROR_BLOCK']));
  dispatch(validateReset());

  if (inputMode === 'EDIT') {
    dispatch(setVisibleContent([CONSTANTS.MAIN_LINK_LIST]));
    dispatch(selectMainLink(false));
  }
};

const mapStateToProps = state => ({
  formContent: state.mainLinks.filter(t => (t.id === state.selected.mainLink))[0],
  viewContent: state.viewContent,
  selected: state.selected,
  inputMode: state.inputMode,
  validateState: state.validateState,
});

const mapDispatchToProps = dispatch => ({
  onClick: (e, inputMode, selected, validateState) => {
    if (isValid(validateState, ['title'])) {
      updateMainLinks[inputMode](dispatch, selected);
      setDefault(e, dispatch, inputMode);
    } else {
      e.preventDefault();
      dispatch(viewErrors(['Title uncorrect!']));
      dispatch(addVisibleContent(['ERROR_BLOCK']));
    }
  },
  onCancelClick: (e, inputMode) => {
    setDefault(e, dispatch, inputMode);
  },
  validate: (type, data) => {
    dispatch(validateInput(type, data));
  },
});

const AddMainLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainLinkForm);

export default AddMainLink;
