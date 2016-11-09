import { connect } from 'react-redux'
import SubLinkList from '../components/SubLinkList'


const getVisibleSubLinks = (subLinks, selectedMainLink, mainId) =>
{
  if (mainId === selectedMainLink) {
    return subLinks.filter(t => (t.mainId === selectedMainLink));
  } else {
    return [];
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    subLinks: getVisibleSubLinks(
      state.subLinks, 
      state.selectedMainLink,
      ownProps.mainId
      ),
    selectedMainLink: state.selectedMainLink,
    viewContent: state.viewContent,
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