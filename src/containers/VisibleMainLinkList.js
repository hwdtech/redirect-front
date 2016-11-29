import { connect } from 'react-redux'
import { selectMainLink, deleteMainLink, deleteSubLinkListByMainId, setVisibleContent, changeInputMode, switchVisibleContent } from '../actions'
import { validateEdit } from '../actions'
import MainLinkList from '../components/MainLinkList'
import * as CONSTANTS from '../components/CONSTANTS'


const formFiller = (title, defaultLink) => {
	document.getElementById(CONSTANTS.INPUT_MAIN_LINK_TITLE).value = title 
	document.getElementById(CONSTANTS.INPUT_MAIN_LINK_DEFAULT_LINK).value = defaultLink
}

const mapStateToProps = (state) => {
	console.log(state)
	return {
		mainLinks: state.mainLinks,
		selected: state.selected,
		viewContent: state.viewContent,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onMainLinkClick: (id, selectedMainLink) => {
			dispatch(selectMainLink(id))
			console.log(id, selectedMainLink)
			if (id === selectedMainLink){
				dispatch(switchVisibleContent([CONSTANTS.SUB_LINK_FORM, CONSTANTS.SUB_LINK_LIST]))
			} else if (!selectedMainLink) {
				dispatch(switchVisibleContent([CONSTANTS.SUB_LINK_FORM, CONSTANTS.SUB_LINK_LIST]))
			}
		},
		onDeleteMainLinkButtonClick: (id) => {
			dispatch(deleteMainLink(id)) 
			dispatch(deleteSubLinkListByMainId(id))
			dispatch(selectMainLink(false))
		},
		onEditMainLinkButtonClick: (id, selectedMainLink, title, defaultLink) => {
			dispatch(changeInputMode())
			dispatch(setVisibleContent([CONSTANTS.MAIN_LINK_FORM]))

			dispatch(validateEdit(['title']))

			if (selectedMainLink === false) {
				dispatch(selectMainLink(id))
			}
			formFiller(title, defaultLink)
		}
	}
}

const VisibleMainLinkList = connect(
	mapStateToProps,
	mapDispatchToProps
)(MainLinkList)

export default VisibleMainLinkList

