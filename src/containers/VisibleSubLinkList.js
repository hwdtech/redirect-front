import { connect } from 'react-redux'
import SubLinkList from '../components/SubLinkList'


const mapStateToProps = (state) => {
  console.log(state)
  return {
    subLinks: state.subLinks,
    selectedMainLink: state.selectedMainLink,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}


const VisibleSubLinkList = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubLinkList)

export default VisibleSubLinkList