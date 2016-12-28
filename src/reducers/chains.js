import { selectAction } from '../utils';


const getChains = (state, action) => (
  action.payload
);

const chainActions = {
  GET_CHAINS_RESPONSE: getChains,
};

const chains = (state = [], action) => (
  selectAction(chainActions, state, action)
);

export default chains;
