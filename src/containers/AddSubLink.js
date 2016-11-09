import { connect } from 'react-redux'
import SubLinkForm from '../components/SubLinkForm'


const mapStateToProps = (state) => {
  return {
  selectedMainLink: state.selectedMainLink,
  viewContent: state.viewContent
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