import { connect } from 'react-redux'
import SubLinkForm from '../components/SubLinkForm'


const mapStateToProps = (state) => {
  return {
  formContent: state.subLinks.filter(t => (t.id === state.selected.subLink))[0],
  selected: state.selected,
  viewContent: state.viewContent,
  inputMode: state.inputMode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    onClick: () => {

    }
  }
}

const AddSubLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubLinkForm)

export default AddSubLink