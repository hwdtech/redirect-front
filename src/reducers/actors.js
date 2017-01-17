import { selectAction } from '../utils';


const getActors = (state, action) => (
  action.payload
);

const compareTemplate = (prevState, newState) => {
  if (prevState.target === newState.target) {
    return true
  }
  return false;
}

const createTemplate = (newState) => {
  /*stub*/
  return newState;
}

const updateTemplate = (prevState, newState) => {
  /*stub*/
  return newState;
}

const createTemplates = (state, action) => {
  let actors = [];
  for (let i = 0; i < action.payload.maps.length; i+=1) {
    for (let j = 0; j < action.payload.maps[i].steps.length; j+=1) {

      let duplicate = false;
      for (let k = 0; k < actors.length; k+=1) {
        if (compareTemplate(actors[k], action.payload.maps[i].steps[j])) {
          actors[k] = updateTemplate(actors[k], action.payload.maps[i].steps[j]);
          duplicate = true;
        }
      }
      if (!duplicate) {
        actors[actors.length] = createTemplate(action.payload.maps[i].steps[j]);
      }
    }
  }
  console.log('createTemplates', actors);
  return state;
}

const actorActions = {
  GET_ACTORS_RESPONSE: getActors,
  GET_CHAINS_RESPONSE: createTemplates,
};

const actors = (state = [], action) => (
  selectAction(actorActions, state, action)
);

export default actors;
