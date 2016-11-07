import { combineReducers } from 'redux'
import mainLinks from './mainLinks'
import subLinks from './subLinks'
import selectedMainLink from './selectedMainLink'

const app = combineReducers({
  mainLinks,
  subLinks,
  selectedMainLink
})

export default app