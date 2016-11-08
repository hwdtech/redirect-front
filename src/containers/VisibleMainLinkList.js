import { connect } from 'react-redux'
import { selectMainLink } from '../actions'
import MainLinkList from '../components/MainLinkList'


const mapStateToProps = (state) => {
  console.log(state)
  return {
    mainLinks: state.mainLinks,
    selectedMainLink: state.selectedMainLink,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMainLinkClick: (id) => {
      dispatch(selectMainLink(id))
    }
  }
}


const VisibleMainLinkList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLinkList)

export default VisibleMainLinkList

