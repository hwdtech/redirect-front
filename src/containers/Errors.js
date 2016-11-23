import { connect } from 'react-redux'
import { selectMainLink, deleteMainLink, deleteSubLinkListByMainId, setVisibleContent, changeInputMode, switchVisibleContent } from '../actions'
import ErrorBlock from '../components/ErrorBlock'
import * as CONSTANTS from '../components/CONSTANTS'


const mapStateToProps = (state) => {
	return {
		viewContent: state.viewContent,
		errors: state.errors,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

const Errors = connect(
	mapStateToProps,
	mapDispatchToProps
)(ErrorBlock)

export default Errors