import { selectAction } from '../utils';


/*
const getChains = (state, action) => (
  action.payload
);
*/

const getChains = (state, action) => (
  JSON.parse(JSON.stringify(action.payload).replace(new RegExp('"key"', 'g'), '"chainKey"'))
);

const deleteActorFromChain = (state, action) => (
  state.map(chain => {
    if (chain.id !== action.chainId) {
      return chain;
    }
    return [
      ...chain.slice(0, action.index),
      ...chain.slice(action.index + 1)
    ];
  })
);

const editActorInChain = (state, action) => (
  state.map(chain => {
    if (chain.id !== action.chainId) {
      return chain;
    };
    chain[action.index] = action.actor;
    return chain;
    /*
    return [
      ...chain.slice(0,action.index), 
      action.actor, 
      ...chain.slice(action.index+1)
    ];
    */
  })
);

const addActorToChain = (state, action) => (
  state.map(chain => {
    if (chain.id !== action.chainId) {
      return chain;
    };
    return [
      ...chain.slice(0, action.index),
      action.actor,
      ...chain.slice(action.index),
    ];
  })
);

const chainActions = {
  GET_CHAINS_RESPONSE: getChains,
  ADD_ACTOR_TO_CHAIN: addActorToChain,
  EDIT_ACTOR_IN_CHAIN: editActorInChain,
};

const chains = (state = [], action) => (
  selectAction(chainActions, state, action)
);

export default chains;
