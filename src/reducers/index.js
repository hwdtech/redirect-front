import { combineReducers } from 'redux'
import mainLinks from './mainLinks'
import subLinks from './subLinks'
import selectedMainLink from './selectedMainLink'
import viewContent from './viewContent'
import inputMode from './inputMode'

const app = combineReducers({
  mainLinks,
  subLinks,
  selectedMainLink,
  viewContent,
  inputMode
})

export default app