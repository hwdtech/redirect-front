import * as actionTypes from '../actions/actionTypes'


const ruleType = (state = "default", action) => {
  switch (action.type) {
    case actionTypes.SELECT_RULE_TYPE:
      return action.ruleType
    default:
      return state
  }
}

export default ruleType