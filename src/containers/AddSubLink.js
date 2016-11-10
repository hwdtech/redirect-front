import { connect } from 'react-redux'
import SubLinkForm from '../components/SubLinkForm'


const mapStateToProps = (state) => {
  return {
  selected: state.selected,
  viewContent: state.viewContent,
  inputMode: state.inputMode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

const AddSubLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubLinkForm)

export default AddSubLink