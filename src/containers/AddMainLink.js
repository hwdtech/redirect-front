import { connect } from 'react-redux'
import MainLinkForm from '../components/MainLinkForm'


const mapStateToProps = (state) => {
  return {
  	formContent: state.mainLinks.filter(t => (t.id === state.selected.mainLink))[0],
  	viewContent: state.viewContent,
  	selected: state.selected,
  	inputMode: state.inputMode,
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