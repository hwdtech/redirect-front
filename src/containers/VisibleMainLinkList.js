import { connect } from 'react-redux'
import { selectMainLink, deleteMainLink, deleteSubLinkListByMainId, setVisibleContent, changeInputMode } from '../actions'
import MainLinkList from '../components/MainLinkList'
import * as CONSTANTS from '../components/CONSTANTS'


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
    onMainLinkClick: (id) => {
      dispatch(selectMainLink(id))
    },
    onDeleteMainLinkButtonClick: (id) => {
      dispatch(deleteMainLink(id)) 
      dispatch(deleteSubLinkListByMainId(id))
      dispatch(selectMainLink(false))
    },
    onEditMainLinkButtonClick: (id, selectedMainLink) => {
      dispatch(changeInputMode())
      dispatch(setVisibleContent([CONSTANTS.MAIN_LINK_FORM]))
      if (selectedMainLink === false) {
        dispatch(selectMainLink(id))
      }
    }
  }
}

const VisibleMainLinkList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLinkList)

export default VisibleMainLinkList

