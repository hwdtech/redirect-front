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
      state.selected.mainLink,
      ownProps.mainId
      ),
    selected: state.selected,
    viewContent: state.viewContent,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteSubLinkButtonClick: (id) => {

    },
    onEditSubLinkButtonClick: (id) => {

    },
    dispatch
  }
}


const VisibleSubLinkList = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubLinkList)

export default VisibleSubLinkList