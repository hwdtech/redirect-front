import { connect } from 'react-redux'
import { selectMainLink } from '../actions'
import MainLinkList from '../components/MainLinkList'


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
    dispatch
  }
}


const VisibleMainLinkList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLinkList)

export default VisibleMainLinkList

