import { selectAction } from '../utils';


//view doesn't update with state
const getChains = (state, action) => (
  JSON.parse(JSON.stringify(action.payload).replace(new RegExp('"key"', 'g'), '"chainKey"')).maps
);

const deleteChain = (state, action) => {
  let newState = [];
  for (let index = 0; index < state.length; index += 1) {
    if (state[index].id !== action.chainId) {
      newState[newState.length] = state[index];
    }
  }
  return newState;
};


const deleteActorFromChain = (state, action) => (
  state.map(chain => {
    if (chain.id !== action.chainId) {
      return chain;
    }
    chain.steps.splice(action.index, 1);
    return chain;
  })
);

const editActorInChain = (state, action) => (
  state.map(chain => {
    if (chain.id !== action.chainId) {
      return chain;
    };
    chain.steps[action.index] = action.actor;
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
    chain.steps = [
      ...chain.steps.slice(0, action.index),
      action.actor,
      ...chain.steps.slice(action.index),
    ];
    return chain;
  })
);

const chainActions = {
  GET_CHAINS_RESPONSE: getChains,
  ADD_ACTOR_TO_CHAIN: addActorToChain,
  EDIT_ACTOR_IN_CHAIN: editActorInChain,
  DELETE_ACTOR_FROM_CHAIN: deleteActorFromChain,
  DELETE_CHAIN: deleteChain,
};

const chains = (state = [], action) => (
  selectAction(chainActions, state, action)
);

export default chains;
