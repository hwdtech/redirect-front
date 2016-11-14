import SELECT_RULE_TYPE from '../actions/actionTypes'
import { selectAction } from '../utils' 


const select_rule_type = (state, action) => {
	return action.ruleType
}

let ruleTypeActions = {
	SELECT_RULE_TYPE: select_rule_type,
}

const ruleType = (state = "DefaultRule", action) => {
		return selectAction(ruleTypeActions, state, action)
}

export default ruleType