import { connect } from 'react-redux'
import { setVisibleContent, selectMainLink } from '../actions'
import * as CONSTANTS from '../components/CONSTANTS'
import LeftMenuBar from '../components/LeftMenuBar'


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onHomeClick: (e) => {
      e.preventDefault()
      dispatch(setVisibleContent([CONSTANTS.MAIN_LINK_LIST]))
      dispatch(selectMainLink(false))
    },
    onMainLinkFormClick: (e) => {
      e.preventDefault()
      dispatch(setVisibleContent([CONSTANTS.MAIN_LINK_FORM]))
    },
    onMainLinkListClick: (e) => {
      e.preventDefault()
      dispatch(setVisibleContent([CONSTANTS.MAIN_LINK_LIST]))
    },
    onSubLinkFormClick: (e) => {
      e.preventDefault()
      dispatch(setVisibleContent([CONSTANTS.SUB_LINK_FORM]))
    }
  }
}

const LeftMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftMenuBar)

export default LeftMenu