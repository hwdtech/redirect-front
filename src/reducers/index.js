import { combineReducers } from 'redux'
import mainLinks from './mainLinks'
import subLinks from './subLinks'
import selected from './selected'
import viewContent from './viewContent'
import inputMode from './inputMode'

const app = combineReducers({
  mainLinks,
  subLinks,
  selected,
  viewContent,
  inputMode
})

export default app