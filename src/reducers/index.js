import { combineReducers } from 'redux';
import mainLinks from './mainLinks';
import subLinks from './subLinks';
import selected from './selected';
import viewContent from './viewContent';
import inputMode from './inputMode';
import ruleType from './ruleType';
import errors from './errors';
import validateState from './validateState';
import serverState from './serverState';

const app = combineReducers({
  mainLinks,
  subLinks,
  selected,
  viewContent,
  inputMode,
  ruleType,
  errors,
  validateState,
  serverState,
});

export default app;
