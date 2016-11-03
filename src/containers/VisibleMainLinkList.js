import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import MainLinkList from '../components/MainLinkList'


const mapStateToProps = (state) => {
  console.log(state)
  return {
    mainLinks: state.mainLinks
  }
}

const VisibleMainLinkList = connect(
  mapStateToProps,
)(MainLinkList)

export default VisibleMainLinkList

