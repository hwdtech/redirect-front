import { connect } from 'react-redux'
import MainLinkForm from '../components/MainLinkForm'


const mapStateToProps = (state) => {
  return {
  viewContent: state.viewContent
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

const AddMainLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLinkForm)

export default AddMainLink