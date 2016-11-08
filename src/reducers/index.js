import { combineReducers } from 'redux'
import mainLinks from './mainLinks'
import subLinks from './subLinks'
import selectedMainLink from './selectedMainLink'
import viewContent from './viewContent'

const app = combineReducers({
  mainLinks,
  subLinks,
  selectedMainLink,
  viewContent
})

export default app