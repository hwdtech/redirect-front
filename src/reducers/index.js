import { combineReducers } from 'redux'
import mainLinks from './mainLinks'
import subLinks from './subLinks'
import selected from './selected'
import viewContent from './viewContent'
import inputMode from './inputMode'
import ruleType from './ruleType'


const app = combineReducers({
  mainLinks,
  subLinks,
  selected,
  viewContent,
  inputMode,
  ruleType
})

export default app