import { selectAction } from '../utils';


const selectRuleType = (state, action) => (
  action.ruleType
);

const ruleTypeActions = {
  SELECT_RULE_TYPE: selectRuleType,
};

const ruleType = (state = 'DefaultRule', action) => (
  selectAction(ruleTypeActions, state, action)
);

export default ruleType;
